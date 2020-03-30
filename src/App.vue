<template>
  <div id="app" class="mb-5">
    <div class="container">
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand><router-link to="/home" class="text-dark">ColliGo</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Come funziona</b-nav-item>
            <b-nav-item><router-link to="/register" class="text-dark">Hai un negozio?</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
