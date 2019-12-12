<template>
  <div class="search-wrapper">
    <loading :active.sync="isLoading" :can-cancel="true" class="modal-dialog"></loading>

    <modal name="company-details-modal" :adaptive="true">
      <div>
        <symbol-details :companyData="companyData"></symbol-details>
      </div>
    </modal>
    
    <div>
      <p>Search company:</p>
    </div>
    <input type="text" v-model="search" placeholder="Search by name..."/>
    <button v-on:click="searchCompanies">Search</button>    
    <div>
      
      <ag-grid-vue
        style="width: 500px; height: 500px;"
        class="ag-theme-balham"
        :columnDefs="columnDefs"
        :rowData="gridData"
        :gridOptions="gridOptions"        
        @rowDoubleClicked="getHistory">
      </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import SymbolDetails from './SymbolDetails.vue';
import {AgGridVue} from "@ag-grid-community/vue";
import Loading from 'vue-loading-overlay';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";

export default {
  components: {
    AgGridVue,
    SymbolDetails,
    Loading
  },
  name: 'Searchbox',
  data () {
    return {
      search: '',
      companiesList: [],
      gridColumns: ["name","symbol"],
      companyData: null,
      isLoading: false,
      columnDefs: null,
      modules: AllCommunityModules,
      gridOptions: {
        rowHeight : 30,        
        headerHeight : 30,
        pagination : false,
        paginationAutoPageSize : false,
        alwaysShowVerticalScroll: true
      }
    }
  },
  computed: {
    gridData: function(){
      if(this.companiesList != null){
        console.log(this.companiesList);
        return this.companiesList;
      }
      else{
        return [];
      }
    }
  },
  methods: {
    searchCompanies () {
      this.$http.get('/api/companies/', { params :{ name : this.search }})
        .then(response => this.setCompaniesList(response.body))
        .catch(error => console.log(error.body))
    },
    setCompaniesList(companiesList){
      this.isLoading = false;
      this.companiesList = companiesList;
    },
    getHistory(event){
      this.isLoading = true;
      this.$http.get('/api/companies/'+event.data.id+'/history/')
        .then(response => this.showCompanyDetails(response.body))
        .catch(error => console.log(error.body))
    },
    showCompanyDetails(companyData){
      this.isLoading = false;
      this.companyData = companyData;
      this.$modal.show('company-details-modal');
    }
  },
  beforeMount() {
      this.columnDefs = [
          {headerName: 'Name', field: 'name'},
          {headerName: 'Symbol', field: 'symbol'}
      ];
  }
}
</script>


<style lang="scss">
  @import "../../node_modules/ag-grid/dist/styles/ag-grid.css";
  @import "../../node_modules/ag-grid/dist/styles/ag-theme-balham.css";

  
  .ag-theme-balham .ag-paging-panel {
    float: right;
  }

  .ag-theme-balham .ag-paging-button {
    border: none;
    background: #fff;
  }

  .ag-theme-balham .ag-paging-row-summary-panel {
    text-align: right;
  }

</style>
