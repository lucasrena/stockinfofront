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
import TurbolinksAdapter from 'vue-turbolinks';
import VueResource from 'vue-resource';
import Vue from 'vue/dist/vue.esm';
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue';
import stockInit from 'highcharts/modules/stock'
import vmodal from 'vue-js-modal'
import {ModuleRegistry, AllCommunityModules} from '@ag-grid-community/all-modules';

Vue.use(VueResource);
Vue.use(TurbolinksAdapter);
Vue.use(HighchartsVue);
Vue.use(vmodal);

ModuleRegistry.registerModules(AllCommunityModules);

stockInit(Highcharts);

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
