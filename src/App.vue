<template>
  <div id="app" class="mb-5">
    <error-boundary>
      <router-view></router-view>
    </error-boundary>
  </div>
</template>

<script>


import ErrorBoundary from "./components/ErrorBoundary";

export default {
  name: 'App',
  components: {
    ErrorBoundary
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css">
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
