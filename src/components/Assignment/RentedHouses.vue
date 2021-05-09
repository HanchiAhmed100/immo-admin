<template>
    <div>
        <sold-or-rented :houses="houses" etat="4"></sold-or-rented>
    </div>
</template>

<script>

import Service from '../../Service'
import SoldOrRented from './SoldOrRented.vue'

export default {
  components: { SoldOrRented },
    name : 'RentedHouses',
    data(){
        return{
            houses : [],
        }
    },
    created(){
        this.loadHouses()
    },
    methods : {
        loadHouses : async function(){
            var service = new Service()
            await service.loadRentedHouses( ( data ) => {
                console.log(data)
                this.houses = data
            })
        },

    }
}
</script>

<style>

</style>