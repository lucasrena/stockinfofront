<template>
  <div id="app">
    <h1>StockInfo App</h1>
    <div class="row">
      <div class="col-6 col-s-9">
        <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  background-color: #9933cc;
  color: #ffffff;
  padding: 15px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

.row {
  justify-content: center;
  display: flex;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

</style>
