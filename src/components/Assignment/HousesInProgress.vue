<template>
    <div class="row">
        <House :houses="houses" :experts="experts" etat="1"></House>
    </div>
</template>

<script>

import Service from '../../Service'
import House from './House.vue';

export default {
    name : 'HousesInProgress',
    components : { House } ,
    data(){
        return{
            houses : [],
            images : [],
            experts : [],
        }
    },
    created(){
        this.loadHouses()
        this.loadExperts()
    },
    methods : {
        loadHouses : async function(){
            var service = new Service()
            await service.loadhousestoappraise( 1 , ( data ) => {
                this.houses = data
            })
        },
        loadEvalutaion : async function(){
            var service = new Service()
            await service.ExpertLoadAll( ( data ) => {
                data.forEach(element => {
                    let  obj = {}
                    obj.expert = element.fullname +" - "+element.tel
                    obj.code = element.id
                    this.experts.push( obj )    
                });
            })
        },
        loadExperts : async function(){
            var service = new Service()
            await service.ExpertLoadAll( ( data ) => {
                data.forEach(element => {
                    let  obj = {}
                    obj.expert = element.fullname +" - "+element.tel
                    obj.code = element.id
                    this.experts.push( obj )    
                });
            })
        }
    }


}
</script>

<style>

</style>