<template>
    <div class="row">
        <sold-or-rented :houses="houses" etat="5"></sold-or-rented>
    </div>
</template>

<script>

import Service from '../../Service'
import SoldOrRented from './SoldOrRented.vue'

export default {
    name : 'SoldHouses',
    components : { SoldOrRented } ,
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
            await service.loadSoldHouses( ( data ) => {
                this.houses = data
            })
        },

    }
}
</script>

<style>

</style>