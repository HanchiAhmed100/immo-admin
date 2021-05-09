<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">      
            <Top-nav></Top-nav>
            <Side-nav></Side-nav>
            <div class="main-panel">
                <div class="content-wrapper">
                    <router-view></router-view>
                </div>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import Footer from './Footer.vue'
import SideNav from './SideNav.vue'
import TopNav from './TopNav.vue'

export default {
  components: { SideNav, TopNav, Footer },

}
</script>

<style>

</style>