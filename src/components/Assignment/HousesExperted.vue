<template>
    <div class="row">
        <House :houses="houses" etat="2"></House>
    </div>
</template>

<script>

import Service from '../../Service'
import House from './House.vue';

export default {
    name : 'HousesExperted',
    components : { House } ,
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
            await service.loadhousestoappraise( 2 , ( data ) => {
                this.houses = data
            })
        },

    }
}
</script>

<style>

</style>