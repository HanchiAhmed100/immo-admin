<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth px-0">
            <div class="row w-100 mx-0">
                <div class="col-lg-4 mx-auto">
                    <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                        <div class="brand-logo">
                            <!-- <img src="../../images/logo.svg" alt="logo"> -->
                        </div>
                        <h4>Immo Admin</h4>
                        <h6 class="font-weight-light">Sign in to continue.</h6>
                        <div class="pt-3">
                            <div class="form-group">
                                <input type="email" class="form-control form-control-lg" v-model="mail" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Mot de passe">
                            </div>
                            {{ erreur }}
                            <div class="mt-3" >
                                <button v-on:click="Login" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Connexion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
</template>

<script>
import Service from '../Service.js'
export default {
    name :'Login',
    data(){
        return{
            mail : '',
            password : '',
            erreur : ''
        }
    },
    methods : {
        Login : async function(){
            var service = new Service()
            await service.AdminLogin(this.mail , this.password , ( data )=>{
                console.log(data)
                if(data.login == "FAILED"){
                    this.erreur = data.DESC
                }else if(data.login == "SUCESS"){
                    localStorage.setItem('admin_token',JSON.stringify(data.token))
                    localStorage.setItem('_admin',JSON.stringify(data.ADMIN))
                    this.$router.push("/dashboard")
                    // this.$router.push('/')

                }
            })
        }
    }
}
</script>

<style>

</style>