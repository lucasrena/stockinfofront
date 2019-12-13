import Vue from 'vue'
import Router from 'vue-router'
import CompaniesList from '@/components/CompaniesList'

import TurbolinksAdapter from 'vue-turbolinks';
import VueResource from 'vue-resource';
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue';
import stockInit from 'highcharts/modules/stock'
import vmodal from 'vue-js-modal'
import {ModuleRegistry, AllCommunityModules} from '@ag-grid-community/all-modules';

Vue.use(Router)
Vue.use(VueResource);
Vue.use(TurbolinksAdapter);
Vue.use(HighchartsVue);
Vue.use(vmodal);

ModuleRegistry.registerModules(AllCommunityModules);

stockInit(Highcharts);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'CompaniesList',
      component: CompaniesList
    }
  ]
})
