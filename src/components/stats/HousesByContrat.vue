<template>
    <div class="mycard p-2 py-4">
        <apexchart exchart type="pie" height="250" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>


<script>
import StatService from '../../StatService.js'
export default {
    name : 'HousesGroupContrat',
    data() {
        return {  
            series: [],
            chartOptions: {
            chart: {
              width: 200,
              type: 'pie',
            },
            labels: [],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },

        }
    },
    async created(){
        var service = new StatService()
        await service.LoadHousesGroupByContrat( ( data ) => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let element = data[i];
                this.series.push(element.nbr)
                this.chartOptions.labels.push(element.contrat)
            }
        })
    },
}
</script>
