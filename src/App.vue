<template>
  <div id="app">
    <router-view/>
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

Vue.use(VueResource);
Vue.use(TurbolinksAdapter);
Vue.use(HighchartsVue);
Vue.use(vmodal)/

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
</style>
