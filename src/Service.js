import axios from  'axios'

export default class Service {

    async AdminLogin( mail , password , callback ){
        await axios.post("https://immo-app-hanchi-ahmed.herokuapp.com/api/admin/login", {
            email : mail ,
            password : password,   
        })
        .then(res =>{
            callback(res.data)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async AdminLoadAll( callback ){
        await axios.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/admin/")
        .then(res =>{
            callback(res.data)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async AdminLoadOne( id , callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/admin/${id}`)
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async AdminSignUp( fullname , mail , password , callback ){
        await axios.post("https://immo-app-hanchi-ahmed.herokuapp.com/api/admin/signup", {
            fullname : fullname,
            email : mail ,
            password : password,   
        })
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async AdminDelete( id , callback ){
        await axios.delete(`https://immo-app-hanchi-ahmed.herokuapp.com/api/admin/${id}`)
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async AdminUpdate( fullname , mail ,password , id , callback ){
        await axios.put(`https://immo-app-hanchi-ahmed.herokuapp.com/api/admin/${id}`,{            
            fullname : fullname,
            email : mail ,
            password : password,   
        })
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }

    async ExpertLoadAll( callback ){
        await axios.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/expert/")
        .then(res =>{
            callback(res.data)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async ExpertLoadOne( id , callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/expert/${id}`)
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async ExpertAdd( fullname ,mail , tel , password , callback ){
        await axios.post("https://immo-app-hanchi-ahmed.herokuapp.com/api/expert/add", {
            fullname : fullname,
            tel : tel,
            email : mail,
            password : password,   
        })
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async ExpertDelete( id , callback ){
        await axios.delete(`https://immo-app-hanchi-ahmed.herokuapp.com/api/expert/${id}`)
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async ExpertUpdate( fullname, mail ,tel , password , id , callback ){
        await axios.put(`https://immo-app-hanchi-ahmed.herokuapp.com/api/expert/${id}`,{            
            fullname : fullname,
            email : mail ,
            tel : tel,
            password : password,   
        })
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }

    async UsersLoadAll( callback ){
        await axios.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/user/")
        .then(res =>{
            callback(res.data)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async UserLoadOne( id , callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/user/${id}`)
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async LoadUser( id , callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/user/${id}`)
        .then(res =>{
            callback(res.data)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async UserDelete( id , callback ){
        await axios.delete(`https://immo-app-hanchi-ahmed.herokuapp.com/api/user/${id}`)
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }

    async LoadTransactions( id  , callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/transaction/${id}`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }
    async LoadUserHouses( id , callback){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/maison/user/${id}`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }
    async getAllLocation( callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/maison/location`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }   
    async getDemandesLocations( callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/transaction/location`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }
    async getAllVentes( callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/maison/vente`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }   
    async getDemandesAchat( callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/transaction/achat`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }
    async loadAnnonce( id , callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/maison/detail/${id}`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }
    async LoadDemande( contrat , id , callback){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/transaction/show/${contrat}/${id}`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }
    async loadhousestoappraise( etat ,callback ){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/maison/loadbystate/${etat}`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    } 
    async loadRentedHouses(callback){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/maison/rented`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }
    async loadSoldHouses(callback){
        await axios.get(`https://immo-app-hanchi-ahmed.herokuapp.com/api/maison/sold`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            console.log(err)
            return null
        })
    }
    async setAffectation( houseId , expertId , dateDebutPlanif , dateFinPlanif , callback ){
        await axios.post(`https://immo-app-hanchi-ahmed.herokuapp.com/api/evaluation/add`,{            
            maisonId : houseId,
            expertId : expertId ,
            etat : 0,
            dateDebutPlanif : dateDebutPlanif,   
            dateFinPlanif : dateFinPlanif

        })
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async ValidateLocation( dateDebut , maisonId , id , callback ){
        await axios.post(`https://immo-app-hanchi-ahmed.herokuapp.com/api/transaction/validate_location/${id}`,{            
            maisonId : maisonId,
            dateDebut : dateDebut ,
        })
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async ValidateVente( dateDebut , maisonId , id , callback ){
        await axios.post(`https://immo-app-hanchi-ahmed.herokuapp.com/api/transaction/validate_vente/${id}`,{            
            maisonId : maisonId,
            dateDebut : dateDebut ,
        })
        .then(res =>{
            callback(res)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    
}




