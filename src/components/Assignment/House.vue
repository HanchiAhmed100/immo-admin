<template>
<div>
    <div class="row">
        <div class="col-sm-12">
            <div class="card p-2 my-2" v-for="( house , i ) in houses " :key="i">
                <div class="row"> 
                    <div class="col-md-3 p-3" >
                        <div  v-bind:style="{ backgroundImage : 'url('+  loadImage( house.images[0].url )+')' }" style="background-size:cover;  height : 100%" class="rounded" >
                            <span style="float : right" class="badge badge-light mr-2 px-3 py-2 mt-3 text-capitalize" v-if="house.contrat == 'location'"> à louer </span>
                            <span style="float : right" class="badge badge-primary mr-2 px-3 py-2 mt-3 text-capitalize" v-else> à Vendre </span>
                        </div>
                    </div>
                    <div class="col-md-9 border-right p-3 text-left">
                        <button v-if="etat == 0 " style="float : right" class="btn btn-inverse-primary mr-2 text-capitalize"  v-on:click="setHouse( house )"  data-toggle="modal" data-target="#AffectationModal" > Affectation d'evaluation </button>
                        <button  v-if="etat == 1" style="float : right" class="btn btn-inverse-warning mr-2 text-capitalize"  v-on:click="setHouse( house )"  data-toggle="modal" data-target="#AffectationModal" > Details de l'Affectation </button>
                        <button  v-if="etat == 2" style="float : right" class="btn btn-inverse-info mr-2 text-capitalize" > Evaluation faite le  {{ formateDate(house.evaluation.dateEvaluation) }} <br/> Par : {{ house.evaluation.expert.fullname }}  </button>
                        <div>
                            <h3> {{ house.type_log }} S+{{ house.nbr_chambre }} {{ house.surface }}m² <br/>
                                <small class="text-muted">
                                    Prix : {{ house.prix}} DT
                                </small>
                            </h3>
                            <h5> {{ house.adresse.adresse }}  <small class="text-muted">- {{ house.adresse.gouvernerat }} </small> </h5>
                            <h5 class="h5"> {{ house.description }} </h5>
                            
                            <h4> Propriataire de l'immobilier : </h4>
                            <div class="row">
                                <div class="col-md-1">
                                    <img style="width : 50px ; height : 50px" class="rounded-circle" :src="'https://immo-app-hanchi-ahmed.herokuapp.com/images/profile/'+house.user.image" alt="image"/>
                                </div>
                                <div class="col-md-7 p-2 pl-4">
                                    <h4> 
                                        {{house.user.nom}} {{house.user.prenom}} <br />
                                        Telephone : {{ house.user.telephone }}<br/>
                                    </h4>
                                </div>
                                <div class="col-md-4 p-2 pl-4 mt-3">
                                    <p class="text-muted"> Mis en ligne depuis le {{ formateDate( house.createdAt ) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="house.length != 0" class="modal fade" id="AffectationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" v-if="etat == 0 ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Affectation des expert pour faire l'evaluation de :</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-left" >
                        <h5> {{ house.type_log }} S+{{ house.nbr_chambre }} {{house.surface}}m² </h5>
                        <h5> Adresse : {{ house.adresse.adresse }} - {{ house.adresse.gouvernerat }} </h5> <br />
                        <h5> Propriataire : {{ house.user.nom }} {{ house.user.prenom }} </h5>
                        <h5> Telephone : {{ house.user.telephone }} </h5> <br />

                        <p>Expert :</p>
                        <v-select  label="expert" :options="experts" v-model="selectedExpert" class="style-chooser"></v-select>
                        <br />
                        <p>Date d'expertise</p>
                        <date-picker input-class="form-control" style="width:100%" v-model="planning" range></date-picker>

                        <div class="mt-4">
                            <div class="row">
                                <div class="offset-6">
                                    <button class="btn btn-outline-light btn-fw mx-2" data-dismiss="modal">Annuler</button>
                                    <button class="btn btn-outline-info btn-fw mx-2" data-dismiss="modal" v-on:click="sendData()">Valider</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-content" v-if="etat == 1" >
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Details de  l'Affectation:</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-left" >
                        <div >
                            <h4 >Evaluation Planifier entre le : </h4>
                            <h4 v-if="house.evaluation"> {{ formateDate(house.evaluation.dateDebutPlanif) }} et {{ formateDate(house.evaluation.dateFinPlanif) }} </h4> 
                            <h4 v-if="house.evaluation.expert.fullname"> Expert : {{ house.evaluation.expert.fullname }} </h4> 
                            <h4 v-if="house.evaluation.expert.fullname"> Telephone : {{ house.evaluation.expert.tel }} </h4> 
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
import vSelect from 'vue-select'
import DatePicker from 'vue2-datepicker';
import moment from 'moment'

export default {
    name : 'House',
    components : { vSelect , DatePicker  } ,
    props : ['houses', 'experts',  'etat'],
    data(){
        return{

            selectedExpert : null,
            planning: null,
            house : []

        }
    },
    created(){

    },
    methods : {

        sendData : async function(){
            var service  = new Service()
            await service.setAffectation( this.house.id , this.selectedExpert.code , this.planning[0] , this.planning[1]  , ( res ) => {
                if(res.status == 200 ){
                    this.$emit('reloadData')
                }
            }) 
        },
        loadImage : function( data ){
            let array = data.split("|")
            return 'https://immo-app-hanchi-ahmed.herokuapp.com/images/'+array[0]
        },
        setHouse : function( data ){
            this.house = data
        },
        formateDate : function( date ){
            return moment(date).format('L');
        }

    }


}
</script>

<style>
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
     font-size: 0.875rem;
    color: #495057;
    background-color: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 5px;
    min-height: 45px;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  }
</style>