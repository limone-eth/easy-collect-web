<template>
    <div id="home" class="container-fluid text-center">

        <h2>Cerca i negozi disponibili sulla mappa</h2>
        <h4>Ordina e ritira la tua spesa in sicurezza</h4>

        <!--<h6>Hai un negozio?
            <router-link to="/registrati" class="text-primary">Registrati per essere visibile sulla mappa</router-link>
        </h6>-->

        <!-- MAPPA -->
        <div class="container mb-3">

            <form @submit="searchForm"
                  @submit.prevent="search">
                <div class="row">
                    <div class="form-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <input type="text" class="form-control" id="name" v-model="name"
                               placeholder="Cerca per nome">
                    </div>
                    <div class="form-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <select class="form-control" id="categories_id" v-model="categories_id">
                            <option value="null" >Filtra per categoria</option>
                            <option :key="category.id" v-for="category in categories" :value="category.id">
                                {{category.name}}
                            </option>
                        </select>
                    </div>
                    <div class="form-group  col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <button v-if="!isLoading" type="submit" class="btn btn-success btn-block">
                            <font-awesome-icon :icon="['fa', 'search']"/>
                            Cerca
                        </button>
                        <button v-else type="submit" class="btn btn-success btn-block" disabled>
                            <b-spinner small></b-spinner>
                            Cercando...
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col-lg-1 col-md-3"></div>
            <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                <div style="height: 700px; width: 100%;">
                    <l-map ref="map" :zoom="zoom" :center="this.center" @update:zoom="zoomUpdated"
                           @update:center="centerUpdated" @update:bounds="boundsUpdated">
                        <l-tile-layer :url="url">

                        </l-tile-layer>
                        <l-marker v-bind:key="shop.id" v-for="shop in shops"
                                  v-bind:lat-lng="[shop.lat,shop.lng]"
                                  v-bind:icon="shop.icon">
                          <l-popup>
                              <div>
                              <span class="text-primary h5">
                                  {{shop.name}}
                              </span><br>
                                  <span v-bind:key="category.id" v-for="category in shop.categories"
                                        class="h6 font-weight-bold">
                                      <span class="badge badge-success mr-1">{{category.name}}</span>
                                  </span>
                                  <br>
                                  <span class="h6">
                                      {{shop.description}}
                                  </span>
                                  <p class="h6" v-show="shop.phone !== null">
                                      <font-awesome-icon :icon="['fa', 'map-pin']" class="text-danger"/>
                                        {{shop.address}}
                                  </p>
                                  <p class="h6" v-show="shop.website !== null">
                                      <font-awesome-icon :icon="['fa', 'globe']" class="text-info"/>
                                      <a v-bind:href="shop.website" target="_blank">Sito Web</a>
                                  </p>

                                  <p class="h6" v-show="shop.phone !== null">
                                      <font-awesome-icon :icon="['fa', 'phone']" class="text-success"/>
                                      <a v-bind:href="'tel:' + shop.phone"> {{shop.phone}}</a>
                                  </p>
                                  <p class="h6" v-show="shop.telegram !== null">
                                      <font-awesome-icon :icon="['fab', 'telegram']" class="text-primary"/>
                                      <a v-bind:href="shop.telegram" target="_blank"> Canale Telegram</a>
                                  </p>
                                  <p class="h6" v-show="shop.facebook !== null">
                                      <font-awesome-icon :icon="['fab', 'facebook']" class="text-primary"/>
                                      <a v-bind:href="shop.facebook" target="_blank"> Pagina Facebook</a>
                                  </p>
                              </div>
                          </l-popup>
                      </l-marker>

                      <l-circle-marker
                        v-if="personalPosition"
                        v-bind:lat-lng="[personalPosition.lat,personalPosition.lng]"
                        :radius="10"
                        :color="'#3388ff'"
                      />
                    </l-map>

                </div>
            </div>

            <div class="col-lg-1 col-md3"></div>
        </div>

    </div>
</template>


<script>
  import {LMap, LTileLayer, LMarker, LPopup, LCircleMarker} from 'vue2-leaflet';
  import L from 'leaflet'
  import {latLng} from "leaflet";
  import { OpenStreetMapProvider } from 'leaflet-geosearch';
  import * as _ from "lodash";


  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LCircleMarker,
    },
    mounted() {
      this.mapRef = this.$refs.map.mapObject;
      this.$getLocation({    
        enableHighAccuracy: true, 
        timeout: Infinity, 
        maximumAge: 0
      }) 
      .then(coordinates => {
        this.center = coordinates;
        this.personalPosition = coordinates;
        this.zoomUpdated(16)
      });

      this.$api.get('/categories')
        .then(response => {
          response.data.map(category => {
            this.categories.push({
              id: category.id,
              name: category.name
            })
          });
        })
        .catch(error => (console.log(error)));
      this.$api.get('/shops')
        .then(response => {
          this.shops = response.data.shops;
          _.map(this.shops, (shop) => shop['icon'] = this.defaultIcon)
        })
        .catch(error => {
          console.log(error);
          throw Error(error.message)
        });
    },
    data() {
      const defaultIcon = L.icon({
            iconRetinaUrl: require('../assets/marker_colors/marker-icon-2x-blue.png'),
            iconUrl: require('../assets/marker_colors/marker-icon-green.png'),
            iconSize: [30, 50],
            iconAnchor: [15, 50],
            popupAnchor: [0, -30]
        })
      const selectedIcon = L.icon({
            iconRetinaUrl: require('../assets/marker_colors/marker-icon-2x-green.png'),
            iconUrl: require('../assets/marker_colors/marker-icon-green.png'),
            iconSize: [30, 50],
            iconAnchor: [15, 50],
            popupAnchor: [0, -30]
        })
      return {
        categories_id: null,
        mapRef: null,
        categories: [],
        name: null,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 5.0,
        user_coordinates: null,
        bounds: 5.3,
        personalPosition: null,
        shops: [],
        center: [41.904176199999995,12.454258099999999],
        icon:null,
        address:null,
        errorMessage: null,
        geosearchOptions: {
          provider: new OpenStreetMapProvider(),
        },
        isLoading: false,
        defaultIcon,
        selectedIcon,
      };
    },
    methods: {
      clearAddress(){
        this.address = "";
      },
      zoomUpdated(zoom) {
        this.zoom = zoom;
      },
      centerUpdated(center) {
        this.center = center;
      },
      boundsUpdated(bounds) {
        this.bounds = bounds;
      },
      getLatLng(marker) {
        return latLng(marker.lat, marker.lng)
      },
      searchForm: function (e) {
        e.preventDefault();
      },
      searchFilter() {
        const params = {}
        if (this.name) {
          params['name'] = this.name
        }
        if (this.categories_id && this.categories_id !== 'null') {
          params['categories_id'] = this.categories_id
        }
        return params
      },
      filtering(params) {
        if(params.name){
          const namesFiltered = _.filter(this.shops, (item) => item.name.includes(params.name))
          if(params.categories_id){
            const categoriesFiltered = _.filter(
                  namesFiltered, 
                  (item) => item.categories
                      .find(elem => elem.id === params.categories_id)
              )
            return categoriesFiltered
          }
          return namesFiltered
        } else if(params.categories_id){
          const categoriesFiltered = _
              .filter(
                  this.shops, 
                  (item) => item.categories
                      .find(elem => elem.id === params.categories_id)
              )
          return categoriesFiltered
        }
        return []
      },
      search() {
        this.isLoading = true
        const params = this.searchFilter()
        const shopsFiltered = this.filtering(params)
        _.map(shopsFiltered, (shop) => {
          shop.icon = this.selectedIcon
        })
        //this.mapRef.panTo(this.user_coordinates);
        this.zoomUpdated(13)
        this.isLoading = false
      }
    }
  }
</script>

<style>
    #home {
        padding-bottom: 180px;
        margin-bottom: 180px;
    }
</style>
