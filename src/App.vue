<template>
  <div id="app">
    <h2>Benvenuto su EasyCollect</h2>
    <h4>Cerca un negozio sulla mappa, segui il link per il canale telegram e ordina i prodotti di cui hai bisogno</h4>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
