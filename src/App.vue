<template>
    <div id="app">
        <error-boundary>
            <div class="container">
                <b-navbar toggleable="lg" type="light">
                    <b-navbar-brand href="#">
                        <router-link to="/mappa"><img src="./assets/brand/logo.png" alt="Navbar logo"
                                                      class="d-inline-block align-top"
                                                      style="height: 40px; width: 130px;"></router-link>
                    </b-navbar-brand>

                    <b-navbar-brand></b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item to="/mappa" class="text-dark">
                                Mappa
                            </b-nav-item>
                            <b-nav-item to="/utenti" class="text-dark">
                                Come funziona
                            </b-nav-item>
                            <b-nav-item to="/chi-siamo">Chi siamo</b-nav-item>
                            <b-nav-item href="./Manifesto.pdf">Manifesto</b-nav-item>
                            <b-nav-item to="/domande-frequenti">Domande frequenti</b-nav-item>
                            <b-nav-item>
                                <router-link to="/esercenti" class="text-success">Hai un negozio?</router-link>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
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
    }

</style>
