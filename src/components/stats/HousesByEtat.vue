<template>
    <div class="mycard p-2 py-4">
        <apexchart type="donut" height="250" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>


<script>
import StatService from '../../StatService.js'
export default {
    name : 'HousesGroupByEtat',
    data() {
         
        return { 
            
          series: [],
          chartOptions: {
            chart: {
              type: 'donut',
            },
            labels: [],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                    width: 380,
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
        await service.LoadHousesGroupByEtat( ( data ) => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let element = data[i];
                if(element.etat == "0"){
                    this.chartOptions.labels.push("Immobilier non expertiser")
                    this.series.push(element.nbr)
                }else if(element.etat == "1"){
                    this.chartOptions.labels.push("En cours")
                    this.series.push(element.nbr)
                }else if(element.etat == "2" ){
                    this.chartOptions.labels.push("Immobilier Expertiser")
                    this.series.push(element.nbr)
                }
            }
        })
    },
}
</script>
