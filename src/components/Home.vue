<template>
    <div class="row">
    
        <!-- MAPPA -->
    
        <div class="col-3"></div>
    
    
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
    
    
            <div style="height: 350px;">
                <div class="info" style="height: 15%">
                </div>
                <l-map style="height: 150%; width: 100%" :zoom="zoom" :center="center" @update:zoom="zoomUpdated" @update:center="centerUpdated" @update:bounds="boundsUpdated">
                    <l-tile-layer :url="url"></l-tile-layer>
                </l-map>
    
            </div>
        </div>
    
    
    
        <div class="col-3"></div>
    </div>
</template>



<script>
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
    components: {
        LMap,
        LTileLayer,
    },
    data() {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            zoom: 5.3,
            center: [43.413220, 11.219482],
            bounds: 5.3
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
        }
    }
}
</script>