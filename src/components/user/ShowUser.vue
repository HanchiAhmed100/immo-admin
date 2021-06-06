<template>
    <div class="row">
        <div class="col-12">

                <div class="row">
                <div class="col-lg-4">
                    <div class="mycard  p-3">
                        <div class="text-center pb-4 border-bottom ">
                            <img :src="'https://immo-app-hanchi-ahmed.herokuapp.com/images/profile/'+user.image" alt="profile" class="img-lg rounded-circle mb-3"/>
                            <div class="mb-3">
                                <h3> 
                                    <svg v-if="user.verif" xmlns="http://www.w3.org/2000/svg" style="width : 20px ; height : 20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" style="width : 20px ; height : 20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {{ user.nom }} {{ user.prenom}} 
                                </h3>
                            </div>
                            <h5> Membre depuis : {{ formateDate(user.createdAt) }} </h5>
                        </div>
                        <div class="py-4">
                            <p class="clearfix">
                                <span class="float-left"> Statut : </span>
                                <span class="float-right text-muted">
                                    <span v-if="user.verif"> Verifier </span>
                                    <span v-else> Non Verifier </span>
                                </span>
                            </p>
                            <p class="clearfix">
                                <span class="float-left"> Telephone </span>
                                <span class="float-right text-muted"> {{ user.telephone }} </span>
                            </p>
                            <p class="clearfix">
                                <span class="float-left"> Email </span>
                                <span class="float-right text-muted"> {{ user.email }} </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 text-left">
                    <div class="mt-4 py-2 mycard  border-bottom" v-if="vente.length != 0">
                        <h3 class="px-3 pt-2">Demandes d'achat : </h3>
                        <div class="table-responsive">
                            <table class="table table-striped text-left">
                                <thead>
                                    <tr>
                                        <th> Logement </th>
                                        <th> Demande </th>
                                        <th> Prix </th>
                                        <th> Date </th>
                                        <th> Fichier </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="element in vente" :key="element.id">
                                        <td> {{ element.maison.type_log }} S+{{element.maison.nbr_chambre}}</td>
                                        <td> {{ element.maison.contrat }} </td>
                                        <td> {{ element.prix }} </td>
                                        <td> {{ formateDate(element.createdAt) }} </td>
                                        <td>
                                            <a :href="'https://immo-app-hanchi-ahmed.herokuapp.com/images/'+element.description">
                                                <svg  xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-on:click="ShowUser(element.id)">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="mt-4 py-2 border-bottom mycard" v-if="location.length != 0">
                        <h3 class="px-3 pt-2">Demandes de location : </h3>
                        <div class="table-responsive ">
                            <table class="table table-striped text-left">
                                <thead>
                                    <tr>
                                        <th> Logement </th>
                                        <th> Demande </th>
                                        <th> Prix </th>
                                        <th> Date </th>
                                        <th> Fichier </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="element in location" :key="element.id">
                                        <td> {{ element.maison.type_log }} S+{{element.maison.nbr_chambre}}</td>
                                        <td> {{ element.maison.contrat }} </td>
                                        <td> {{ element.prix }} </td>
                                        <td> {{ formateDate(element.createdAt) }}</td>
                                        <td>
                                            <a :href="'https://immo-app-hanchi-ahmed.herokuapp.com/images/'+element.description"  target="_blank">
                                                <svg  xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-on:click="ShowUser(element.id)">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="profile-feed ">
                        <div class="d-flex align-items-start profile-feed-item mycard my-2 px-2 pr-4 pointer" v-for="house in houses" :key="house.id" v-on:click="goToAnnonce(house.id)">
                            <div class="ml-4">
                            <h4>{{ house.type_log}} S+{{house.nbr_chambre}} {{house.surface}}m²  <span style="float:right" class="badge badge-info"> {{house.contrat}} </span></h4>
                            <h5>Adresse : {{ house.adresse.adresse }} - {{house.adresse.gouvernerat }} </h5>
                            <hr />
                            <h5>Description : {{ house.description }}</h5>
                            <!-- {{ house.adresse.rue }} {{ house.adresse.ville}} {{ house.adresse.quartier }}  -->
                                <div class="row pt-3">
                                    <div class="col-sm-4" >
                                        <img  style=" height : 150px ; width : 175px"  :src="'https://immo-app-hanchi-ahmed.herokuapp.com/images/'+getImages( house.images[0].url , 0 )" alt="Image" class="rounded"  target="_blank" />                            
                                    </div>
                                    <div class="col-sm-4">
                                        <img style=" height : 150px ; width : 175px" :src="'https://immo-app-hanchi-ahmed.herokuapp.com/images/'+getImages( house.images[0].url , 1 )" alt="Image" class="rounded"  target="_blank" />                            
                                    </div>
                                    <div class="col-sm-4">
                                        <img style=" height : 150px ; width : 175px" :src="'https://immo-app-hanchi-ahmed.herokuapp.com/images/'+getImages( house.images[0].url , 2 )" alt="Image" class="rounded"  target="_blank" />                            
                                    </div>
                                </div>
                            
                            </div>
                        </div>
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
    name : 'ShowUser',
    data(){
      return{
        user : {},
        vente : [],
        location : [],
        houses : [],
        image : [],
      }
    },
    created(){
        if(!this.$route.params.id){
            this.$router.go(-1)
        }else{
            this.loadData(this.$route.params.id)
        }
    },
    methods: {
        loadData : async function( id ){
            let service = new Service()
            await service.LoadUser( id , ( res ) => {
                console.log(res)
                this.user = res
            })
            await service.LoadTransactions( id , ( res ) => {
                this.vente = res[0]
                this.location = res[1]
            })
            await service.LoadUserHouses( id ,  ( res ) => {
                this.houses = res
                // this.foramteChambre(this.houses.chambres.chambre)
                // this.formatefourniture(this.houses.fournitures.fournitures.chambre)
            })
        },
        formateDate : function( date ){
            return moment(date).format('L');
        },
        foramteChambre : function( data ){
            console.log(data)
        },
        formatefourniture : function( data ){
            console.log(data)
        },
        getImages : function( data , i ){
            const array = data.split("|") 
            return array[i]
        },
        goToAnnonce(id){
            this.$router.push({ name : 'Annonce' , params : { id }})
        }

    }
}
</script>

<style>

</style>