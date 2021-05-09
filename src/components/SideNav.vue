<template>
    <nav class="sidebar sidebar-offcanvas text-left" id="sidebar">
        <ul class="nav ">
          <!--
          <li class="nav-item">
            <router-link  class="nav-link" >
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Tableau de bord</span>
            </router-link> 
          </li> 
          -->
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Assignment' }">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Immobilier</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Location' }">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Gestion des locations</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Vente' }"> 
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Gestion des achats</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'AllUser' }">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Gestion des utilisateurs</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'AllExpert' }">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Gestion des experts</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'AllAdmin' }">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Gestion des Admins</span>
            </router-link>
          </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name : 'SideNav',
    data(){
      return{
      }
    }

}
</script>

<style>

</style>