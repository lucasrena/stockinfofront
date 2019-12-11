<template>
  <div class="search-wrapper">
    <modal name="hello-world" :adaptive="true">
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
      <grid :gridData="gridData" :columns="gridColumns" v-on:rowclick="getHistory"></grid>
    </div>
  </div>
</template>

<script>
import Grid from './Grid.vue';
import SymbolDetails from './SymbolDetails.vue';

export default {
  components: {
    Grid,
    SymbolDetails
  },
  name: 'Searchbox',
  data () {
    return {
      search: '',
      result: [],
      gridColumns: ["name","symbol"],
      companyData: null
    }
  },
  computed: {
    gridData: function(){
      if(this.result != null){
        return this.result;
      }
      else{
        return [];
      }
    }
  },
  methods: {
    searchCompanies () {
      this.$http.get('/api/companies/', { params :{ name : this.search }})
        .then(response => this.result = response.body)
        .catch(error => this.result = error.body)
    },
    getHistory(id){
      this.$http.get('/api/companies/'+id+'/history/')
        .then(response => this.showCompanyDetails(response.body))
        .catch(error => console.log(error.body))
    },
    showCompanyDetails(companyData){
      this.companyData = companyData;
      this.$modal.show('hello-world');
    }
  }
}
</script>