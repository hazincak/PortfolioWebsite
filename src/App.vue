<template>
  <div id="app">
    <app-navigation-bar></app-navigation-bar>
    
       <router-view/>
    
    <app-footer></app-footer>

  </div>
</template>
<script>
import AppNavigationBar from "../src/components/NavigationBar";
import AppFooter from "../src/components/Footer";
export default {
  components:{
    AppNavigationBar,
    AppFooter
  }
}
</script>
