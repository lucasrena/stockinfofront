<template>
  <div>
    
    <!--COMPANY DETAILS MODAL-->
    <modal name="company-details-modal" :width="'80%'" :height="'auto'">
      <div>
        <company-details :companyData="companyData"></company-details>
      </div>
    </modal>

    <!--SEARCH BOX AND GRID-->
    <div class="search-wrapper">

      <form class="row">
          <div class="col-10">
            <label>Search for company: </label>
            <input type="text" v-model="search" placeholder="by name or symbol"/>
          </div>
          <div class="col-2" style="padding:2px">
            <button v-on:click="searchCompanies" class="button">Search</button>
          </div>
      </form>
      
      <div>     
        <grid :gridData="gridData" :gridColumns="gridColumns" :showOverlay="isLoading" @getHistory="getHistory"></grid>
      </div>
    </div>

  </div>
</template>

<script>
import CompanyDetails from './CompanyDetails.vue';
import Grid from './Grid.vue';

export default {
  components: {
    CompanyDetails,
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
        return this.companiesList;
      }
      else{
        return [];
      }
    }
  },
  methods: {
    searchCompanies () {
      this.isLoading = true;
      this.$http.get('/api/companies/', { params :{ name : this.search }})
        .then(response => this.setCompaniesList(response.body))
        .catch(error => this.displayError(error.body))
    },
    setCompaniesList(companiesList){
      this.isLoading = false;
      this.companiesList = companiesList;
    },
    getHistory(id){
      this.isLoading = true;
      this.$http.get('/api/companies/'+id+'/history/')
        .then(response => this.showCompanyDetails(response.body))
        .catch(error => this.displayError(error.body))
    },
    showCompanyDetails(companyData){
      this.isLoading = false;
      this.companyData = companyData;
      this.$modal.show('company-details-modal');
    },
    displayError(error){
      this.isLoading = false;
      console.log(error);
    }
  }
}
</script>

<style scoped>

.button {
  background-color: #ab2929;
  border: none;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

.input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>