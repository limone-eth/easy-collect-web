<template>
    <div id="home" class="container-fluid text-center">
        <h2>Benvenuto su EasyCollect</h2>
        <h4>Cosa stai cercando?</h4>
        <p>Hai un negozio? <router-link to="/register" class="text-primary">Registrati per essere visibile sulla mappa</router-link></p>
        <!-- MAPPA -->
    
        <div class="col-3"></div>
    
    
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
    
    
            <div style="height: 350px;">
                <div class="info" style="height: 15%">
                </div>
                <l-map style="height: 150%; width: 100%" :zoom="zoom" :center="center" @update:zoom="zoomUpdated" @update:center="centerUpdated" @update:bounds="boundsUpdated">
                    <l-tile-layer :url="url"></l-tile-layer>
                    <l-marker v-bind:key="marker" v-for="marker in markers" v-bind:lat-lng="getLatLng(marker)">
                        <l-popup></l-popup>
                    </l-marker>
                </l-map>
    
            </div>
        </div>

        <div class="col-3"></div>
    </div>
</template>



<script>
  import {LMap, LTileLayer} from 'vue2-leaflet';
  import { latLng } from "leaflet";

export default {
    components: {
        LMap,
        LTileLayer,

    },
    mounted(){
      this.$getLocation({
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: Infinity
      })
        .then(coordinates => {
          if (coordinates.lat && coordinates.lng){
            this.user_coordinates = {
              lat: coordinates.lat,
              lng: coordinates.lng
            };
            console.log(coordinates);
            this.centerUpdated([coordinates.lat, coordinates.lng]);
            this.zoomUpdated(10.3)
          }
        });
    },
    data() {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            zoom: 5.3,
            center: [43.413220, 11.219482],
            user_coordinates: null,
            bounds: 5.3,
            markers: [
              {
                id: 1,
                name: "Casa mia",
                category: "Alimentari",
                phone: "3313333",
                lat: 43.413220,
                lng: 11.219482
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
          return latLng(marker.lat,marker.lng)
      }
    }
}
</script>

<style>
    #home{
        padding-bottom: 80px;
    }
</style>
