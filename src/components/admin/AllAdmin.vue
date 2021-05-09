<template>
    <div>
        <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body text-left">
                    <div class="row">
                        <div class="col-9">
                            <h4 class="card-title">Liste des administrateurs </h4>
                            <p class="card-description">
                                <!-- Add class <code>.table-striped</code> -->
                            </p>
                        </div>
                        <div class="col-3">
                            <router-link  :to="{ name: 'AddAdmin' }" class="btn btn-outline-primary btn-fw">
                                Ajouter Un admin
                            </router-link>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        Nom et prenom
                                    </th>
                                    <th>
                                        Email 
                                    </th>
                                    <th>
                                        Depuis
                                    </th>
                                    <th>
                                        Actions

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" element in Admins " :key="element.id">
                                    <td class="py-1">
                                        {{ element.fullname }}
                                    </td>
                                    <td>
                                        {{ element.email }}
                                    </td>
                                    <td>
                                        {{ formateDate(element.createdAt) }}
                                    </td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-on:click="editAdmin(element)">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" style="width : 25px ; height : 25px" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-on:click="setAdmin(element)" data-toggle="modal" data-target="#exampleModalLong" >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Alerte</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p> Etez vous sur de vouloir supprimer l'adminstrateur : <b> {{ OneAdmin.fullname }} </b> </p>

                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-outline-light btn-fw" data-dismiss="modal">Annuler</button>
                        <button class="btn btn-outline-danger btn-fw" v-on:click="deleteAdmin" data-dismiss="modal">Supprimer</button>
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
    name : 'AllAdmin',
    data(){
        return{
            Admins : [],
            OneAdmin : {}
        }
    },
    created(){
        this.loadAdmin()
    },
    methods : {
        loadAdmin : async function(){
            var service = new Service()
            await service.AdminLoadAll( ( res ) => {
                this.Admins = res
            })
        },
        editAdmin : function( admin ){
            this.$router.push({ name : 'EditAdmin' , params: { admin } })
        },
        deleteAdmin : async function(){
            var service = new Service()
            await service.AdminDelete( this.OneAdmin.id ,( res ) => {
                if(res.status == 200){
                    this.loadAdmin()
                }
            })
        },
        setAdmin : function( element ){
            this.OneAdmin = element
        },
        formateDate : function( date ){
            return moment(date).format('L');
        }
    }
}

</script>

<style>

</style>