<template>
 <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body text-left">
                  <h4 class="card-title">Modifier adminstrateur </h4>
                  <p class="card-description">
                    Horizontal form layout
                  </p>
                    <div class="form-group row">
                      <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Nom et prenom </label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" disabled v-model="fullname" placeholder="Nom">
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="exampleInputMobile" class="col-sm-3 col-form-label">Email</label>
                      <div class="col-sm-9">
                        <input type="email" class="form-control"  v-model="mail" placeholder="Adresse mail ">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputMobile" class="col-sm-3 col-form-label">Telephone</label>
                      <div class="col-sm-9">
                        <input type="email" class="form-control"  v-model="tel" placeholder="Numero de telephone ">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Mot de passe</label>
                      <div class="col-sm-9">
                        <input type="password" class="form-control" v-model="pwd" placeholder="Mot de passe">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">Retaper le mot de passe</label>
                      <div class="col-sm-9">
                        <input type="password" class="form-control" v-model="re_pwd" placeholder="Mot de passe">
                      </div>
                    </div>
                    <div class="text-right">
                      <button class="btn btn-primary mr-2" v-on:click="update_expert" >Valider</button>
                      <button class="btn btn-light">Annuler</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Service from '../../Service'
export default {
    name : 'EditExpert',
    data(){
      return{
        id : '',
        fullname : '',
        mail : '',
        tel : '',
        pwd : '',
        re_pwd : ''
      }
    },
    created(){
        if(!this.$route.params.admin){
            this.$router.go(-1)
        }
        let obj = this.$route.params.admin
        this.fullname = obj.fullname
        this.mail = obj.email
        this.id = obj.id
        this.tel = obj.tel
    },
    methods: {
      update_expert : function(){
        if(this.pwd == this.re_pwd){
          var service = new Service()

          service.ExpertUpdate( this.fullname , this.mail , this.tel ,this.pwd , this.id ,( res ) => {
            console.log(res)
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