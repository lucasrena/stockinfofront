<template>
  <div class="search-wrapper">
    <loading :active.sync="isLoading" :can-cancel="true" class="modal-dialog"></loading>

    <modal name="company-details-modal" :adaptive="true">
      <div>
        <company-details :companyData="companyData"></company-details>
      </div>
    </modal>
    
    <div>
      <p>Search for companies:</p>
    </div>
    <input type="text" v-model="search" placeholder="Search by name..."/>
    <button v-on:click="searchCompanies">Search</button>    
    <div>     
      <grid :gridData="gridData" :gridColumns="gridColumns" @getHistory="getHistory"></grid>
    </div>
  </div>
</template>

<script>
import CompanyDetails from './CompanyDetails.vue';
import Grid from './Grid.vue';
import Loading from 'vue-loading-overlay';

export default {
  components: {
    CompanyDetails,
    Loading,
    Grid
  },
  name: 'Searchbox',
  data () {
    return {
      search: '',
      companiesList: [],
      gridColumns: ["name","symbol"],
      companyData: null,
      isLoading: false
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
    getHistory(id){
      this.isLoading = true;
      this.$http.get('/api/companies/'+id+'/history/')
        .then(response => this.showCompanyDetails(response.body))
        .catch(error => console.log(error.body))
    },
    showCompanyDetails(companyData){
      this.isLoading = false;
      this.companyData = companyData;
      this.$modal.show('company-details-modal');
    }
  }
}
</script>
