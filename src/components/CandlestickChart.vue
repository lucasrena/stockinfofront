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
                // series: [{
                //     name: 'AAPL',
                //     data: [10, 20, 10, 23, 65, 121, 44, 66, 98, 30, 32, 56, 25, 12, 53],
                //     pointStart: Date.UTC(2018, 1, 1),
                //     pointInterval: 1000 * 3600 * 24,
                //     tooltip: {
                //         valueDecimals: 2
                //     }
                // }]
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