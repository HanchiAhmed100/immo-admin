<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card p-2 my-2" v-for="( house , i ) in houses " :key="i">
                <div class="row"> 
                    <div class="col-md-3 p-3" >
                        <div  v-bind:style="{ backgroundImage : 'url('+  loadImage( house.images[0].url )+')' }" style="background-size:cover;  height : 100%" class="rounded" >
                            <span style="float : right" class="badge badge-light mr-2 px-3 py-2 mt-3 text-capitalize" v-if="house.contrat == 'location'"> Louer </span>
                            <span style="float : right" class="badge badge-primary mr-2 px-3 py-2 mt-3 text-capitalize" v-else> Vendu </span>
                        </div>
                    </div>
                    <div class="col-md-9 border-right p-3 text-left">
                        <button v-if="etat == 4 " style="float : right" class="btn btn-inverse-success mr-2 text-capitalize" > Louer par  <span v-if="house.location.user">{{ house.location.user.nom }} {{ house.location.user.prenom }}</span><span v-if="house.location"> le {{ formateDate( house.location.date ) }}</span> </button>
                        <button v-if="etat == 5 " style="float : right" class="btn btn-inverse-primary mr-2 text-capitalize" > Acheter par <span v-if="house.vente.user">{{ house.vente.user.nom }} {{ house.vente.user.prenom }}</span><span v-if="house.vente"> le {{ formateDate( house.vente.date ) }}</span> </button>

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
                                    <img style="width : 50px ; height : 50px" class="rounded-circle" :src="'http://localhost:8081/images/profile/'+house.user.image" alt="image"/>
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
    </div>
</template>

<script>

import moment from 'moment'

export default {
    name : 'SoldOrRented',
    props : [ 'houses' , 'etat' ],
    methods : {
        loadImage : function( data ){
            let array = data.split("|")
            return 'http://localhost:8081/images/'+array[0]
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

</style>