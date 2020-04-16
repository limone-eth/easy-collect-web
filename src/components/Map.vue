<template>
    <div id="home" class="text-center">
        <div id="cover">
            <div id="location-form" class="row">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="card" id="main-card">
                        <div class="card-body">
                            <h2 class="card-title text-success font-weight-bold">Ordina e ritira la spesa in
                                sicurezza</h2>
                            <h5 class="card-subtitle mb-2 text-muted font-weight-normal">Inserisci il tuo indirizzo e
                                trova i negozi più vicini a te</h5>
                            <br>
                            <div v-if="positionErrorMessage" class="h6 form-text text-danger">
                                <font-awesome-icon :icon="['fa', 'exclamation-circle']"/>
                                {{positionErrorMessage}}
                            </div>
                            <form @submit="positionForm"
                                  @submit.prevent="position">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-2">
                                        <input type="text" class="form-control" id="user_address" v-model="user_address"
                                               placeholder="Indirizzo">
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2">
                                        <input type="text" class="form-control" id="user_city" v-model="user_city"
                                               placeholder="Città">
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-2">
                                        <input type="number" class="form-control" id="user_cap" v-model="user_cap"
                                               placeholder="CAP">
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2">
                                        <button v-if="!isLoading" type="submit" class="btn btn-success btn-block">
                                            <font-awesome-icon :icon="['fa', 'search']"/>
                                            Trova i negozi!
                                        </button>
                                        <button v-else type="submit" class="btn btn-success btn-block" disabled>
                                            <b-spinner small></b-spinner>
                                            Cercando...
                                        </button>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt-2">
                                        <span v-if="errorMissingCapOrCity || errorMessage" class="text-danger">
                                            {{ errorMissingCapOrCity || errorMessage }}
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                </div>
            </div>
        </div>
        <!-- MAPPA -->
        <div v-show="personalPosition" class="mt-5 container" id="leaflet-map">
            <div class="container mb-3">
                <div class="text-center h3 mb-3">Cerca i negozi vicino a te</div>
                <form @submit="searchForm"
                      @submit.prevent="search" id="search-form">
                    <div class="row">
                        <div class="col-lg-2 col-md-2"/>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <input type="text" class="form-control" id="name" v-model="name"
                                   placeholder="Cerca per nome">
                        </div>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <select class="form-control" id="categories_id" v-model="categories_id">
                                <option value="null">Filtra per categoria</option>
                                <option :key="category.id" v-for="category in categories" :value="category.id">
                                    {{category.name}}
                                </option>
                            </select>
                        </div>
                        <div class="form-group  col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <button v-if="!isLoading" type="submit" class="btn btn-success btn-block">
                                <font-awesome-icon :icon="['fa', 'search']"/>
                                Cerca
                            </button>
                            <button v-else type="submit" class="btn btn-success btn-block" disabled>
                                <b-spinner small></b-spinner>
                                Cercando...
                            </button>
                        </div>
                        <div class="col-lg-2 col-md-2"/>
                    </div>
                </form>
                <div class="text-center">
                    <span v-if="errorNotFound" class="text-danger">
                        {{ errorNotFound }}
                    </span>
                </div>
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
                                    <div style="min-width:280px;">
                              <span class="text-primary h5">
                                  {{shop.name}}
                              </span><br>
                                        <span v-bind:key="category.id" v-for="category in shop.categories"
                                              class="h6 font-weight-bold">
                                      <span class="badge badge-success mr-1">{{category.name}}</span>
                                  </span>
                                        <br>
                                        <span class="h6 mt-2">
                                      {{shop.description}}
                                  </span>
                                        <p class="h6" v-show="shop.phone !== null">
                                            <font-awesome-icon :icon="['fa', 'map-pin']" class="text-danger"/>
                                            {{shop.address}}
                                            <br>
                                            <font-awesome-icon :icon="['fa', 'city']" class="text-danger"/>
                                            {{shop.city}} - {{shop.cap}}
                                        </p>
                                        <br>
                                        <div class="row justify-content-between">
                                            <div class="col-6">
                                                <div class="h6" v-show="shop.website !== null">
                                                    <a v-bind:href="shop.website" target="_blank">
                                                        <font-awesome-icon :icon="['fa', 'globe']" class="text-info"/>
                                                        Sito Web</a>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="h6" v-show="shop.facebook !== null">
                                                    <a v-bind:href="shop.facebook" target="_blank" class="text-primary">
                                                        <font-awesome-icon :icon="['fab', 'facebook']"/>
                                                        Facebook</a>
                                                </div>
                                            </div>
                                        </div>

                                        <hr>
                                        <div class="h5 text-center">Contatta la bottega</div>
                                        <br>
                                        <div class="row text-center">
                                            <div class="col-3" v-bind:style="{opacity: shop.phone ? 1 : 0.3}">
                                                <a v-bind:href="'tel:' + shop.phone"
                                                   v-bind:class="shop.phone ? '' : 'disabled'">
                                                    <font-awesome-icon :icon="['fa', 'phone']" class="text-success h4"/>
                                                    Telefono</a>
                                            </div>
                                            <div class="col-3" v-bind:style="{opacity: shop.whatsapp ? 1 : 0.3}">
                                                <a v-bind:href="shop.whatsapp"
                                                   v-bind:class="shop.whatsapp ? '' : 'disabled'">
                                                    <font-awesome-icon :icon="['fab', 'whatsapp']"
                                                                       class="text-success h4"/>
                                                    Whatsapp</a>
                                            </div>
                                            <div class="col-3" v-bind:style="{opacity: shop.messenger ? 1 : 0.3}">
                                                <a v-bind:href="shop.messenger" target="_blank"
                                                   v-bind:class="shop.messenger ? '' : 'disabled'">
                                                    <font-awesome-icon :icon="['fab', 'facebook-messenger']"
                                                                       class="text-primary h4"/>
                                                    Messenger</a>
                                            </div>
                                            <div class="col-3" v-bind:style="{opacity: shop.telegram ? 1 : 0.3}">
                                                <a v-bind:href="shop.telegram" target="_blank"
                                                   v-bind:class="shop.telegram ? '' : 'disabled'">
                                                    <font-awesome-icon :icon="['fab', 'telegram']"
                                                                       class="text-primary h4"/>
                                                    Telegram</a>
                                            </div>
                                        </div>
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


    </div>
</template>


<script>
  import {LMap, LTileLayer, LMarker, LPopup, LCircleMarker} from 'vue2-leaflet';
  import L from 'leaflet'
  import {OpenStreetMapProvider} from 'leaflet-geosearch';
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
      if (localStorage.user_lat && localStorage.user_lng) {
        this.setPosition(localStorage.user_lat, localStorage.user_lng,
          localStorage.user_address, localStorage.user_city, localStorage.user_cap)
      }
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
        iconUrl: require('../assets/marker_colors/marker-icon-blue.png'),
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
        user_address: null,
        user_city: null,
        user_cap: null,
        bounds: 5.3,
        personalPosition: null,
        shops: [],
        center: [41.904176199999995, 12.454258099999999],
        icon: null,
        address: null,
        positionErrorMessage: null,
        errorMessage: null,
        geosearchOptions: {
          provider: new OpenStreetMapProvider(),
        },
        isLoading: false,
        defaultIcon,
        selectedIcon,
        errorNotFound: null,
        errorMissingCapOrCity: null
      };
    },
    computed: {
      axiosParamsPosition() {
        const params = new URLSearchParams();
        if (this.user_address) {
          params.append('address', this.user_address);
        }
        if (this.user_city) {
          params.append('city', this.user_city);
        }
        if (this.user_cap) {
          params.append('cap', this.user_cap);
        }
        return params;
      }
    },
    methods: {
      clearAddress() {
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
        if (params.name) {
          const namesFiltered = _.filter(this.shops, (item) => item.name.toLowerCase().includes(params.name.toLowerCase()))
          if (params.categories_id) {
            const categoriesFiltered = _.filter(
              namesFiltered,
              (item) => item.categories
                .find(elem => elem.id === params.categories_id)
            )
            return categoriesFiltered
          }
          return namesFiltered
        } else if (params.categories_id) {
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
        _.map(this.shops, (shop) => shop['icon'] = this.defaultIcon)
        const params = this.searchFilter()
        const shopsFiltered = this.filtering(params)
        this.errorNotFound = shopsFiltered.length > 0 ? null : "Nessun risultato per la tua ricerca";
        _.map(shopsFiltered, (shop) => {
          shop.icon = this.selectedIcon
        })
        this.mapRef.panTo(this.personalPosition);
        this.zoomUpdated(13)
        this.isLoading = false
      },
      positionForm: function (e) {
        e.preventDefault();
      },
      position() {
        this.isLoading = true;
        this.errorMessage = null;
        this.errorMissingCapOrCity = null;
        this.$api.get('/coordinates', {params: this.axiosParamsPosition})
          .then(response => {
            this.setPosition(response.data.lat, response.data.lng);
            this.isLoading = false;
            localStorage.setItem('user_lat', response.data.lat);
            localStorage.setItem('user_lng', response.data.lng);
            localStorage.setItem('user_address', this.user_address);
            localStorage.setItem('user_city', this.user_city);
            localStorage.setItem('user_cap', this.user_cap);
            this.scrollToMap(`#search-form`, 300)
          })
          .catch(error => {
            console.log(error);
            this.isLoading = false;
            if (error.response.data.error.code === 5) {
              this.errorMissingCapOrCity = "Inserisci il CAP o la Città"
            } else {
              this.errorMessage = "Indirizzo non trovato, controlla l'indirizzo inserito";
            }
          });
      },
      setPosition(lat, lng, address = null, city = null, cap = null) {
        this.personalPosition = {lat: lat, lng: lng};
        this.center = {lat: lat, lng: lng};
        if (address && address.toString() !== 'null') {
          this.user_address = address;
        }
        if (city && city.toString() !== 'null') {
          this.user_city = city;
        }
        if (cap && cap.toString() !== 'null') {
          this.user_cap = cap;
        }
        this.zoomUpdated(13);
        setTimeout(() => {
          this.mapRef.invalidateSize();
        }, 300);
      },
      scrollToMap(element, duration) {
        const options = {
          easing: 'ease-in',
          offset: -10,
          force: true,
          cancelable: true,
          x: false,
          y: true
        };
        this.$scrollTo(element, duration, options)
      }
    }
  }
</script>

<style>
    #home {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    #location-form {
        padding-top: 120px;
        padding-bottom: 140px;
    }

    #cover {
        background: url("../assets/grocery.jpg") no-repeat center center fixed;;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    #main-card {
        position: relative;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
        padding: 10px;
        background: white;
    }

    /*
    *  Remove arrows in input number 
    *  Chrome, Safari, Edge, Opera 
    */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    a.disabled {
        pointer-events: none;
        cursor: default;
    }
</style>
