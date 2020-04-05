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
        <div v-show="personalPosition">
            <div class="container mb-3">
                <form @submit="searchForm"
                      @submit.prevent="search">
                    <div class="row">
                        <div class="form-group col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <input type="text" class="form-control" id="name" v-model="filter"
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
                            <l-marker v-bind:key="shop.natural_key" v-for="shop in shops"
                                      v-bind:lat-lng="[shop.lat,shop.lng]">
                                <l-popup>
                                    <div>
                              <span class="text-primary h5">
                                  {{shop.name}}
                              </span><br>
                                        <span v-bind:key="category.name" v-for="category in shop.categories"
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


    </div>
</template>


<script>
  import Vue from 'vue';
  import {LMap, LTileLayer, LMarker, LPopup, LCircleMarker} from 'vue2-leaflet';
  import {Icon, LatLng} from "leaflet";
  import {OpenStreetMapProvider} from 'leaflet-geosearch';

  delete Icon.Default.prototype._getIconUrl;
  Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

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
      /*this.$getLocation({
        enableHighAccuracy: true,
        timeout: Infinity,
        maximumAge: 0
      })
        .then(coordinates => {
          this.center = coordinates;
          this.personalPosition = coordinates;
          this.zoomUpdated(16)
        });*/

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
        })
        .catch(error => {
          console.log(error);
          throw Error(error.message)
        });
    },
    data() {
      return {
        categories_id: null,
        mapRef: null,
        categories: [],
        filter: null,
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
        isLoading: false
      };
    },
    computed: {
      axiosParams() {
        const params = new URLSearchParams();
        if (this.address) {
          params.append('address', this.address);
        }
        if (this.filter) {
          params.append('filter', this.filter);
        }
        if (this.categories_id && this.categories_id !== 'null') {
          params.append('categories_id', this.categories_id);
        }
        return params;
      },
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
      search() {
        this.isLoading = true;
        this.errorMessage = null;
        this.$api.get('/shops', {params: this.axiosParams})
          .then(response => {
            this.shops = response.data.shops;
            const lat = new LatLng(response.data.lat, response.data.lng);
            if (response.data.lat != null && response.data.lng != null && response.data.lat != -1) {
              this.mapRef.panTo(lat);
              this.zoomUpdated(20)
            } else if (response.data.lat == -1) {
              Vue.$toast.open({
                message: "Indirizzo non trovato! :(",
                type: "warning",
                position: "top-right",
                onClose: this.clearAddress()
              });
            }
            this.isLoading = false;
          })
          .catch(error => {
            console.log(error);
            this.isLoading = true;
            this.errorMessage = "Ops, c'è stato un errore!";
            Vue.$toast.open({
              message: "Ops, c'è stato un errore. :(",
              type: "danger",
              position: "top-right",
              onClose: this.clearAddress()
            });
          });
      },
      positionForm: function (e) {
        e.preventDefault();
      },
      position() {
        this.isLoading = true;
        this.errorMessage = null;
        this.$api.get('/coordinates', {params: this.axiosParamsPosition})
          .then(response => {
            this.personalPosition = {lat: response.data.lat, lng: response.data.lng};
            this.center = {lat: response.data.lat, lng: response.data.lng};
            this.zoomUpdated(14);
            const lat = new LatLng(response.data.lat, response.data.lng);
            if (response.data.lat != null && response.data.lng != null && response.data.lat !== -1) {
              this.mapRef.panTo(lat);
              this.zoomUpdated(16)
            }
            this.isLoading = false;

          })
          .catch(error => {
            console.log(error);
            this.isLoading = false;
            this.errorMessage = "Ops, c'è stato un errore! Non siamo riusciti a trovare il tuo indirizzo... riprova!";
          });
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
</style>
