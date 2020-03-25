<template>
    <div id="home" class="container-fluid text-center">
        <h2>Benvenuto su EasyCollect</h2>
        <h4>Cosa stai cercando?</h4>

        <h6>Hai un negozio?
            <router-link to="/register" class="text-primary">Registrati per essere visibile sulla mappa</router-link>
        </h6>

        <!-- MAPPA -->
        <div class="container">

        <form @submit="searchForm"
              @submit.prevent="search">
            <div class="row">
                <div class="form-group col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <input type="text" class="form-control" id="name" v-model="filter"
                           placeholder="Cerca per nome o indirizzo">
                </div>
                <div class="form-group col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <select class="form-control" id="categories_id" v-model="categories_id">
                        <option value="null" disabled>Filtra per categoria</option>
                        <option :key="category" v-for="category in categories" :value="category.id">
                            {{category.name}}
                        </option>
                    </select>
                </div>
                <div class="form-group  col-lg-2 col-md-2 col-sm-12 col-xs-12">
                    <button type="submit" class="btn btn-primary btn-block">
                        <font-awesome-icon :icon="['fa', 'search']"/>
                        Cerca
                    </button>
                </div>

            </div>

        </form>
        </div>
        <div class="row">
            <div class="col-lg-1 col-md-3"></div>
            <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                <div style="height: 700px; width: 100%;">
                    <l-map :zoom="zoom" :center="center" @update:zoom="zoomUpdated"
                           @update:center="centerUpdated" @update:bounds="boundsUpdated">
                        <l-tile-layer :url="url">

                        </l-tile-layer>

                        <l-marker v-bind:key="marker" v-for="marker in markers"
                                  v-bind:lat-lng="[marker.lat,marker.lng]">
                            <l-popup>
                                <div>
                                <span class="text-primary h5">
                                    {{marker.name}}
                                </span><br>
                                    <span class="h6 font-weight-bold">
                                    {{marker.category}}
                                </span>
                                    <p class="h6" v-show="marker.phone !== null">
                                        <font-awesome-icon :icon="['fa', 'phone']" class="text-success"/>
                                        <a v-bind:href="'tel:' + marker.phone"> {{marker.phone}}</a>
                                    </p>
                                    <p class="h6" v-show="marker.telegram !== null">
                                        <font-awesome-icon :icon="['fab', 'telegram']" class="text-primary"/>
                                        <a v-bind:href="marker.telegram"> Canale Telegram</a>
                                    </p>
                                    <p class="h6" v-show="marker.facebook !== null">
                                        <font-awesome-icon :icon="['fab', 'facebook']" class="text-primary"/>
                                        <a v-bind:href="marker.facebook"> Pagina Facebook</a>
                                    </p>
                                </div>
                            </l-popup>
                        </l-marker>
                    </l-map>

                </div>
            </div>

            <div class="col-lg-1 col-md3"></div>
        </div>

    </div>
</template>


<script>
  import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet';
  import {latLng, Icon} from "leaflet";

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
    },
    mounted() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.user_coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.markers.push({
            id: 1,
            name: "Test",
            category: "Pescheria",
            phone: "3313333",
            facebook: "www.google.it",
            telegram: "www.google.it",
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          this.center = [position.coords.latitude, position.coords.longitude];
          this.zoomUpdated(12.5)
        },
        error => {
          console.log(error.message);
        },
      )
      /*this.$getLocation({
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: Infinity
      })
        .then(coordinates => {
          if (coordinates.lat && coordinates.lng) {
            this.user_coordinates = {
              lat: coordinates.lat,
              lng: coordinates.lng
            };
            console.log(coordinates);
            //this.centerUpdated([coordinates.lat, coordinates.lng]);
            //this.zoomUpdated(10.3)
          }
        });*/
    },
    data() {
      return {
        categories_id: null,
        categories: [
          {id: 1, name: "Enoteca"},
          {id: 2, name: "Pescheria"},
          {id: 3, name: "Macelleria"},
          {id: 4, name: "Panificio"},
          {id: 5, name: "Pastificio"},
          {id: 6, name: "Altro"},
        ],
        filter: null,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 5.0,
        user_coordinates: null,
        bounds: 5.3,
        markers: [
          {
            id: 2,
            name: "Casa mia",
            category: "Alimentari",
            phone: "3313333",
            facebook: "www.google.it",
            lat: 43.413220,
            lng: 10.219482
          }
        ]
      };
    },
    methods: {
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
