<template>
    <div>
        <div class="card mb-4">
        <div class="card-body">
            <div class="row">

                <div class="col-sm-6">
                    <h4 class="mt-3">Immobilier mis en ventes et Demande d'achats</h4>
                </div>
                <div class="col-sm-6">
                    <button class="btn btn-inverse-info mr-1" v-on:click="ShowHouses" > Immobilier à vendre </button>
                    <button class="btn btn-inverse-dark ml-1" v-on:click="ShowDemandes"> Demande d'achat d'immobilier </button>
                </div>
                
            </div>
        </div>
        </div>
        <div class="card-columns" v-if="house">
            <div class="card text-left" v-for="house in houses " :key="house.id" v-on:click="goToAnnonce(house.id)">
                <img class="card-img-top" :src="'http://localhost:8081/images/'+getImages( house.images[0].url )"  alt="Card image cap">                            
                <div class="card-body">
                    <h4 class="card-title mt-3">{{ house.type_log }} S+{{house.nbr_chambre}} {{ house.surface}}m²  <br />  {{ house.prix }} DT </h4>
                    <b class="card-text"> {{house.adresse.adresse}} </b>
                    <p class="card-text mt-2"> {{house.description}} </p>

                </div>
            </div>
        </div>
        <div class="card text-left" v-if="demande">
            <div class="mt-4 py-2 px-1 ">
                <h3 class="pl-2">Demandes de locations : </h3>
                <div class="table-responsive">
                    <table class="table table-striped text-left">
                        <thead>
                            <tr>
                                <th> Etat </th>
                                <th> Logement </th>
                                <th> Adresse </th>
                                <th> Propiataire </th>
                                <th> Demandeur </th>
                                <th> Prix </th>
                                <th> Date </th>
                                <th> Fichier </th>
                                <th> Action </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="element in demandes" :key="element.id">
                                <td>
                                    <span v-if="element.etat">
                                        <svg  xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-on:click="ShowUser(element.id)">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>     
                                    </span> 
                                    <span v-else>
                                        <svg  xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-on:click="ShowUser(element.id)">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </td>
                                <td> {{ element.maison.type_log }} S+{{element.maison.nbr_chambre}} {{element.surface}}m²</td>
                                <td> {{ element.maison.adresse.adresse }}</td>
                                <td> {{ element.maison.user.nom }} {{ element.maison.user.prenom }} </td>
                                <td> {{ element.user.nom }} {{ element.user.prenom }} </td>

                                <td> {{ element.prix }} DT </td>
                                <td> {{ formateDate(element.createdAt) }} </td>
                                <td>
                                    <a :href="'http://localhost:8081/images/'+element.description"  target="_blank">
                                        <svg  xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-on:click="ShowUser(element.id)">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </a>
                                </td>
                                <td v-on:click="setContrat(element)">
                                    <svg  xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-on:click="setContrat(element)" data-toggle="modal" data-target="#ValidatesaleModel">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="ValidatesaleModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" v-if="demandeToValidate.length != 0">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Validation de la demande</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-left">
                        <p> Valider la vente de l'immobilier de  <b v-if="demandeToValidate.maison.user">{{ demandeToValidate.maison.user.nom }} {{ demandeToValidate.maison.user.prenom }}</b> par : <b v-if="demandeToValidate.user"> {{ demandeToValidate.user.nom }} {{ demandeToValidate.user.nom }} </b> </p><br/>
                        
                        <label>Date prevu du debut de la vente :</label>
                        <date-picker input-class="form-control" style="width:100%" v-model="startDate" ></date-picker>

                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-outline-light btn-fw" data-dismiss="modal">Annuler</button>
                        <button class="btn btn-outline-info btn-fw" v-on:click="ValidateDemande" data-dismiss="modal">Valider</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from '../Service'
import moment from 'moment'
import DatePicker from 'vue2-datepicker';

export default {
    name : 'Vente',
    components : {  DatePicker  } ,

    data(){
        return{
            houses : [],
            demandes : [],
            demandeToValidate : [],
            startDate : null,
            house : true,
            demande : false
        }
    },
    async created(){
        this.getVente()
        this.getDemande()
    },
    methods : {
        getVente : async function () {
            var service = new Service()
            await service.getAllVentes( ( res ) => {
                this.houses = res
            }) 
        },
        getDemande : async function () {
            var service = new Service()
            await service.getDemandesAchat( ( res ) => {
                this.demandes = res
            }) 
        },
        getImages : function( data ){
            var array = data.split("|")
            return array[0]
        },
        ShowDemandes : function(){
            this.house = false
            this.demande = true
        },
        setContrat : function(ele){
            this.demandeToValidate = ele
        },
        ShowHouses : function(){
            this.house = true
            this.demande = false
        },
        ValidateDemande : async function(){
            var service = new Service()
            await service.ValidateVente(  this.startDate , this.demandeToValidate.maisonId , this.demandeToValidate.id, ( res ) => {
                console.log(res)
                this.getDemande()                
            })
        },
        formateDate : function( date ){
            return moment(date).format('L');
        },
        goToAnnonce(id){
            this.$router.push({ name : 'Annonce' , params : { id }})
        }
    }

}
</script>

<style>

</style>