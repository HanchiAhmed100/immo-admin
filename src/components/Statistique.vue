<template>
    <div class="row">
        <div class="col-md-12 mb-2">
            <houses-group-by-type></houses-group-by-type>
        </div>
        <div class="col-6 mb-2">
            <houses-by-contrat></houses-by-contrat>
        </div>
        <div class="col-6 mb-2">
            <houses-by-etat></houses-by-etat>
        </div>
        <div class="col-12">
            <houses-by-gouvernerat></houses-by-gouvernerat>
        </div>
    </div>
</template>

<script>
import HousesByContrat from './stats/HousesByContrat.vue'
import HousesByEtat from './stats/HousesByEtat.vue'
import HousesByGouvernerat from './stats/HousesByGouvernerat.vue'
import HousesGroupByType from './stats/HousesGroupByType.vue'
export default {
  components: { HousesGroupByType, HousesByContrat, HousesByEtat, HousesByGouvernerat },
    name : 'Statistique',
} 
</script>

