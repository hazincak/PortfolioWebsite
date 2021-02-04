<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view/>
  </div>
</template>
<script>
import NavigationBar from "../src/components/NavigationBar";
export default {
  components:{
    NavigationBar
  }
}
</script>
