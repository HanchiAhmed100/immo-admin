<template>
    <div>
        <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body text-left">
                    <div class="row">
                        <div class="col-9">
                            <h4 class="card-title">Liste des utilisateurs </h4>
                            <p class="card-description">
                                <!-- Add class <code>.table-striped</code> -->
                            </p>
                        </div>
                        <div class="col-3">
                            <!-- <router-link  :to="{ name: 'AddExpert' }" class="btn btn-outline-primary btn-fw">
                                Ajouter Un utilisateur
                            </router-link> -->
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th> Utilisateur </th>
                                    <th> Nom et prenom </th>
                                    <th> Email </th>
                                    <th> Telephone  </th>
                                    <th> Adresse </th>
                                    <th> Depuis </th>
                                    <th> Verifier </th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" element in Users " :key="element.id">
                                    <td class="py-1"> <img :src="'http://localhost:8081/images/profile/'+element.image" alt="image"/> </td>
                                    <td class="py-1"> {{ element.nom }} {{ element.prenom }} </td>
                                    <td> {{ element.email }} </td>
                                    <td> {{ element.telephone }} </td>
                                    <td> {{ element.adress }} </td>
                                    <td> {{ formateDate(element.createdAt) }} </td>
                                    <td>
                                        <svg v-if="element.verif" xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </td>
                                    <td>
                                        <svg  xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-on:click="ShowUser(element.id)">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from '../../Service'

import moment from 'moment'

export default {
    name : 'AllUser',
    data(){
        return{
            Users : [],
            OneUser : {}
        }
    },
    created(){
        this.loadExperts()
    },
    methods : {
        loadExperts : async function(){
            var service = new Service()
            await service.UsersLoadAll( ( res ) => {
                this.Users = res
            })
        },
        ShowUser : function( id ){
            this.$router.push({ name : 'ShowUser' , params: { id } })
        },
        formateDate : function( date ){
            return moment(date).format('L');
        }
    }
}

</script>


<style>

</style>