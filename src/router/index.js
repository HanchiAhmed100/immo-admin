import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },{
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        path: '/',
        name: 'Statistique',
        component: () => import('../components/Statistique.vue'),
      },{
        path: '/admin',
        name: 'Admin',
        component: () => import('../components/admin/Admin.vue'),
        children: [
          {
            name : 'AllAdmin',
            path: '/',
            component: () => import('../components/admin/AllAdmin.vue'),
          },
          {
            name : 'AddAdmin',
            path: '/add_admin',
            component: () => import('../components/admin/AddAdmin.vue'),
          },{
            name : 'EditAdmin',
            path: '/edit_admin',
            component: () => import('../components/admin/EditAdmin.vue'),
          } 
        ]
      },{
        path: '/expert',
        name: 'Expert',
        component: () => import('../components/expert/Expert.vue'),
        children: [
          {
            name : 'AllExpert',
            path: '/',
            component: () => import('../components/expert/AllExpert.vue'),
          },{
            name : 'AddExpert',
            path: '/add_expert',
            component: () => import('../components/expert/AddExpert.vue'),
          },{
            name : 'EditExpert',
            path: '/edit_expert',
            component: () => import('../components/expert/EditExpert.vue'),
          } 
        ]
      },{
        path: '/user',
        name: 'User',
        component: () => import('../components/user/User.vue'),
        children: [
          {
            name : 'AllUser',
            path: '/',
            component: () => import('../components/user/AllUser.vue'),
          },{
            name : 'AddUser',
            path: '/add_user',
            component: () => import('../components/user/AddUser.vue'),
          },{
            name : 'ShowUser',
            path: '/show_user/:id',
            component: () => import('../components/user/ShowUser.vue'),
          }  
        ]
      },{
        path: '/locations',
        name: 'Location',
        component: () => import('../components/Location.vue'),
      },{
        path: '/vente',
        name: 'Vente',
        component: () => import('../components/Vente.vue'),
      },{
        name : 'Annonce',
        path : '/annonce/:id',
        component: () => import('../components/Annonce.vue'),
      },{
        name : 'Assignment',
        path : '/assignment',
        component: () => import('../components/Assignment.vue'),
        children: [
          {
            name : 'HousesToExpert',
            path: '/set_expert',
            component: () => import('../components/Assignment/HousesToExpert.vue'),
          },{
            name : 'HousesInProgress',
            path: '/in_progress',
            component: () => import('../components/Assignment/HousesInProgress.vue'),
          } ,{
            name : 'HousesExperted',
            path: '/experted',
            component: () => import('../components/Assignment/HousesExperted.vue'),
          },{
            name : 'SoldHouses',
            path: '/sold',
            component: () => import('../components/Assignment/SoldHouses.vue'),
          },{
            name : 'RentedHouses',
            path: '/rented',
            component: () => import('../components/Assignment/RentedHouses.vue'),
          },
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
