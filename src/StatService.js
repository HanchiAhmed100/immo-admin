import axios from  'axios'

export default class Service {

    async LoadHousesGroupByType( callback ){
        await axios.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/stats/by_type_log")
        .then(res =>{
            callback(res.data)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async LoadHousesGroupByContrat( callback ){
        await axios.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/stats/by_contrat")
        .then(res =>{
            callback(res.data)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async LoadHousesGroupByEtat( callback ){
        await axios.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/stats/by_etat")
        .then(res =>{
            callback(res.data)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
    async LoadHousesByContratAndGouvernerat( callback ){
        await axios.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/stats/by_contrat_and_gouvernerat")
        .then(res =>{
            callback(res.data)
        })
        .catch(err =>{
            console.log(err)
            return null
        })
    }
}