<template>
    <div class="row">
        <House :houses="houses" :experts="experts" etat="0" @reloadData="loadHouses"></House>
    </div>
</template>

<script>

import Service from '../../Service'
import House from './House.vue';

export default {
    name : 'HousesToExpert',
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
        this.loadExpert()
    },
    methods : {
        loadHouses : async function(){
            var service = new Service()
            await service.loadhousestoappraise( 0 , ( data ) => {
                this.houses = data
            })
        },
        loadExpert : async function(){
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