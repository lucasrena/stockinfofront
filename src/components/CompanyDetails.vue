<template>
  <div>    
    <candlestick-chart :chartData="history" :title="chartTitle"></candlestick-chart>
  </div>
</template>

<script>
import CandlestickChart from './CandlestickChart.vue';

export default {  
  components:{
    CandlestickChart
  },
  name: 'CompanyDetails',
  props: {
    companyData: null
  },
  data: function () {
    return {
      chartData: null
    }
  },
  computed:{
    chartTitle(){
      console.log(this.companyData);
      return this.companyData != null ? this.companyData.company.symbol + " - " + this.companyData.company.name + " Price History": "";
    },
    history(){
      return this.companyData != null ? this.companyData.history : null;
    }
  }
}
</script>

<style scoped>
</style>
