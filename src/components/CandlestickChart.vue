<template>
  <highcharts class="stock" :constructor-type="'stockChart'" :options="stockOptions"></highcharts>
</template>

<script>
export default {
    props:{
        chartData : null,
        title: String
    },
    data () {
        return {
            stockOptions: {
                rangeSelector: {
                    inputEnabled: false,
                    enabled: false
                },
                navigator:{
                    enabled: false,
                },
                title: {
                    text: this.title
                },
                chart:{
                    height: '70%'
                },
                scrollbar:{
                    enabled: false
                },
                series: [{
                    type: 'candlestick',
                    name: 'Stock Price',
                    data: this.chartData
                }]
            }
        }
    },
    watch:{
        data(){ this.redraw(); log.console(this.data); }
    }
}
</script>
<style scoped>
.stock {
  width: 70%;
  margin: 0 auto
}
</style>