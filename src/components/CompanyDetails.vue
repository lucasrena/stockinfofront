<template>
  <div class="chart-container">    
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
      return this.companyData != null ? this.companyData.company.symbol + " - " + this.companyData.company.name : "";
    },
    history(){
      return this.companyData != null ? this.companyData.history : null;
    }
  }
}
</script>

<style scoped>
.chart-container{
  padding : 20px
}
</style>
