<template>
 <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body text-left">
                  <h4 class="card-title">Un nouveau expert </h4>
                  <p class="card-description">
                  </p>
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Nom</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="nom" placeholder="Username">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Prenom</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="prenom" placeholder="prenom">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Email </label>
                      <div class="col-sm-9">
                        <input type="mail" class="form-control" v-model="mail" placeholder="Adresse mail ">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Telephone</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="tel" placeholder="Numero de telephone ">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Password</label>
                      <div class="col-sm-9">
                        <input type="password" class="form-control" v-model="pwd" placeholder="Password">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 col-form-label">Retaper le mot de passe </label>
                      <div class="col-sm-9">
                        <input type="password" class="form-control" v-model="re_pwd" placeholder="Password">
                      </div>
                    </div>
                    <div class="text-right">
                        <button class="btn btn-primary mr-2" v-on:click="add_expert">Valider</button>
                        <button class="btn btn-light">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from '../../Service'
export default {
    name : 'AddExpert',
    data(){
      return{
        nom : '',
        prenom : '',
        mail : '',
        tel : '',
        pwd : '',
        re_pwd : ''
      }
    },
    methods: {
      add_expert : function(){
        if(this.pwd == this.re_pwd){
          var service = new Service()
          var fullname = this.nom + " " + this.prenom
          service.ExpertAdd( fullname , this.mail , this.tel , this.pwd , ( res ) => {
            if(res.status == 200){
              this.$router.push({ name : 'AllExpert'})
            }
          })
        }
      }
    }
}
</script>

<style>

</style>