<template>
    <div>
        <div class="card mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12">
                        <h3 class="text-lead mt-3">Immobilier</h3>
                    </div>
                    <div class="col-sm-12">
                        <router-link class="btn btn-inverse-primary mr-2 mt-1" :to="{ name: 'HousesToExpert' }" > Non expertiser </router-link>
                        <router-link class="btn btn-inverse-warning mr-2 mt-1" :to="{ name: 'HousesInProgress' }" >  En cours d'expertise </router-link>
                        <router-link class="btn btn-inverse-info mr-2 mt-1" :to="{ name: 'HousesExperted' }" >  Expertiser</router-link>
                        <router-link class="btn btn-inverse-dark mr-2 mt-1" :to="{ name: 'SoldHouses' }">  Immobilier Vendu  </router-link>
                        <router-link class="btn btn-inverse-success mr-2 mt-1" :to="{ name: 'RentedHouses' }">  Immobilier Louer </router-link>
                    </div>     
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
// import Service from '../Service'
import moment from 'moment'

export default {
    name : 'Assignment',
    data(){
        return{
            houses : []
        }
    },
    created(){
        
    },
    methods : { 
        formateDate : function( date ){
            return moment(date).format('L');
        }
    }

}
</script>

<style>

</style>