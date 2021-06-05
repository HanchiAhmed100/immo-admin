<template>
    <div class="mycard p-2 py-4">
        <apexchart exchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>


<script>
import StatService from '../../StatService.js'
export default {
    name : 'HousesByGouvernerat',
    data() {
         
        return { 
            series: [{
                data: []
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'bar'
                },
                colors: ["#325288","#28b5b5","#184d47","#91c788"],
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: [
                    ],
                    labels: {
                        style: {
                            colors: ["#325288","#28b5b5","#184d47","#91c788"],
                            fontSize: '12px'
                        }
                    }
                }
            },
        }
    },
    async created(){
        var service = new StatService()
        await service.LoadHousesByContratAndGouvernerat( ( data ) => {
        
            for (let i = 0; i < data.length; i++) {
                
            }
        })
    },
}
</script>
