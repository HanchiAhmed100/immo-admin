<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <div class="card text-left p-2 mb-2">
                    <h4 class="my-4 text-center"> Propiataire de l'immobilier </h4>
                    <div class="row" v-if="annonce.user">
                        <div class="col-md-3">
                            <img style="float : left" :src="image" alt="profile" class="img-lg rounded-circle mb-2 mr-3 ml-2"/>
                        </div>
                        <div class="col-md-9" >
                            <div class="m-3 pl-2">
                                <div class="mt-2">
                                    <h4> 
                                        <svg v-if="annonce.user.verif" xmlns="http://www.w3.org/2000/svg" style="width : 20px ; height : 20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" style="width : 20px ; height : 20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {{ annonce.user.nom }} {{ annonce.user.prenom}} 
                                    </h4>
                                </div>
                                <h5> Email : {{ annonce.user.email }}</h5>
                                <h5 class="mb-4"> Telphone : {{ annonce.user.telephone }} <br /></h5>
                            </div>
                        </div>
                        <div class="pl-4">
                            <h5> Adresse : {{ annonce.user.adress}} </h5>
                            <h5> Membre depuis : {{ formateDate(annonce.user.createdAt) }}</h5>     
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card text-left ">
                    <div class="pb-4 ml-3">
                        <h4 class="my-4 text-center"> Information sur l'immobilier </h4>
                        <span style="float : right" class="badge badge-info mr-3 px-3 py-2" v-if="annonce.contrat == 'location'"> à louer </span>
                        <span style="float : right" class="badge badge-primary mr-3 px-3 py-2" v-else> à Vendre </span>
                        <p class="lead"> {{ annonce.type_log }} S+{{annonce.nbr_chambre}} {{annonce.surface}} m²</p>
                        <h4>Prix : {{ annonce.prix }} DT <span v-if="annonce.contrat == 'location'">/ Mois</span> </h4>
                        <p class="font-weight-bold"> Description : {{ annonce.description }} </p>
                        <span v-for=" (tag , i) in tags" :key="i" class="badge badge-light px-3 py-2 mr-2"> {{ tag }} </span>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-2"  v-if="demandes.length != 0">
                <div class="card py-4 px-2">
                <h4 class="my-2 text-center">Liste des demandes </h4>
                    <table class="table table-striped text-left">
                        <thead>
                            <tr>
                                <th> Demandeur </th>
                                <th> Demande </th>
                                <th> Prix </th>
                                <th> Date </th>
                                <th> Fichier </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="element in demandes" :key="element.id">
                                <td v-if="element.user" class="pointer" v-on:click="goToProfile(element.user.id)" > <img :src="'http://localhost:8081/images/profile/'+element.user.image" alt="image"/>  {{ element.user.prenom }} {{ element.user.nom }}  </td>
                                <td> {{ annonce.contrat }} </td>
                                <td> {{ element.prix }}  DT <span v-if="annonce.contrat == 'location'"> / Mois </span> </td>
                                <td> {{ formateDate(element.createdAt) }}</td>
                                <td>
                                    <a :href="'http://localhost:8081/images/'+element.description"  target="_blank">
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

            <div class="col-md-12">
                 <div class="card mt-3  text-left ">
                    <div class="row">
                        <div class="col-md-4 ">
                            <div class="pb-4 ml-3">
                                <h4 class="my-4 ml-2"> Localisation de l'immobilier </h4>
                                <p class="lead"> </p>
                                <p class="font-weight-bold"> </p>
                            
                                <ul class="list-arrow" v-if="annonce.adresse">
                                    <li> &#9733; Adresse : {{ annonce.adresse.adresse }}</li>
                                    <li> &#10146; Gouvernerat : {{ annonce.adresse.gouvernerat }} </li>
                                    <li> &#10146; Ville : {{ annonce.adresse.ville }} </li>
                                    <li> &#10146; Quartier : {{ annonce.adresse.quartier }} </li>
                                    <li> &#10146; Rue : {{ annonce.adresse.rue }} </li>
                                    <!-- <li>Longitude : {{ annonce.longitude }} , Latitude : {{ annonce.latitude}} </li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 pb-4">
                            <h4 class="my-4"> Composition de l'immobilier </h4>
                            <ul class="list-arrow">
                                <li  v-for="( chambre , i ) in chambres" :key="i">  {{ chambre.nombre }}  - {{ chambre.nom }}  </li>
                            </ul>
                        </div>
                        <div class="col-md-5">
                            <l-map style="height: 240px" :zoom="zoom" :center="lating">
                                <l-tile-layer :url="url"></l-tile-layer>
                                <l-marker :lat-lng="lating" ></l-marker>
                            </l-map>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12" v-if="Eq.length != 0 || EqCuisine.length != 0 ">
                 <div class="mt-3 text-left ">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card text-center p-1">
                                <h4 class="my-4" >  Equipements et meubles </h4>
                                <table class="table table-striped text-left " v-if="Eq.length != 0 ">
                                    <thead>
                                        <tr>
                                            <th> # </th>
                                            <th> Meuble </th>
                                            <th> Nombre </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for=" ( element , i ) in Eq " :key="i">
                                            <td> {{ i+1 }} </td>
                                            <td> {{ element.name }} </td>
                                            <td> {{ element.nbr }} </td>

                                        </tr>
                                    </tbody>
                                </table>
                                
                                <div v-else>
                                    <h4 class=" py-4 text-center">Maison non meublé </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 ">
                            <div class="card pb-5 px-1">
                                <h4 class="my-4 text-center">  Equipements Cuisine  </h4>
                                <table class="table table-striped text-left">
                                    <thead>
                                        <tr>
                                            <th> # </th>
                                            <th> Equipement </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for=" ( element , i ) in EqCuisine " :key="i">
                                            <td> {{ i+1 }} </td>
                                            <td> {{ element }} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 card mt-4 ">
                <h4 class="my-4 text-center"> Photos de l'immobilier </h4>
                <div class="row ">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 p-4  " v-for="( image , i ) in images " :key="i">
                        <div  v-bind:style="{ backgroundImage : 'url('+serverUrl+image+')' }" style="background-size:cover;  height : 200px" class="rounded" ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from '../Service'
import moment from 'moment'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name : 'Annonce',
    components : { LMap, LTileLayer, LMarker  },
    data(){
        return{
            annonce : [],
            images : [],
            image : '',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            serverUrl : 'http://localhost:8081/images/',
            zoom: 11,
            lating: [0 ,0],
            tags : [],
            demandes : [],
            chambres : [],
            Eq : [],
            EqCuisine : []
        }
    },
    async created(){
        var id = this.$route.params.id
        await this.loadAnnonce( id )
        this.setData()   
    },
    methods :{
        loadAnnonce : async function( id){
            var service = new Service()
            await service.loadAnnonce( id , ( data ) =>{
                this.annonce = data
            })
            await service.LoadDemande( this.annonce.contrat , this.annonce.id  , (data) =>{
                this.demandes = data
            })
        },
        setData : function(){
            this.image  = 'http://localhost:8081/images/profile/'+this.annonce.user.image
            let marks = new Array(this.annonce.latitude , this.annonce.longitude)
            this.lating = marks
            this.images = this.annonce.images[0].url.split("|")
            this.tags = JSON.parse(this.annonce.tags)
            this.chambres = JSON.parse(this.annonce.chambres[0].chambre)
            let obj = JSON.parse(this.annonce.fournitures[0].fournitures)
            this.Eq = obj[0]
            this.EqCuisine = obj[1]
        },
        formateDate : function( date ){
            return moment(date).format('L');
        },
        goToProfile : function( id ){
            this.$router.push({ name : 'ShowUser' , params: { id } })
        }
    }
}
</script>

<style>

</style>