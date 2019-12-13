<template>
  <div id="app">
    <header class="container header center" style="padding:10px 5px">
      <h1 class="margin jumbo">StockInfo App</h1>
    </header>
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
}

.header {
  background-color: #ab2929;
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
