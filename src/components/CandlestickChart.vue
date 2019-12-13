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
                    height: '60%'
                },
                scrollbar:{
                    enabled: false
                },
                series: [{
                    type: 'candlestick',
                    name: 'Stock Price',
                    data: this.chartData
                }],
                yAxis: {
                    lineWidth: 2,
                    offset: 40,
                    tickWidth: 1,
                    tickPosition: "inside"
                },
                tooltip:{xDateFormat: '%A, %b %d'},
                plotOptions: {
                    candlestick: {
                        color: '#ab2929',
                        upColor: 'white'
                    }
                },
                credits: {
                    enabled: false
                }
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