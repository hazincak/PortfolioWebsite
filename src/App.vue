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
  },
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
    } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),
   methods: {
    onWaypoint ({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log('waypoint going in!')
      }
 
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log('waypoint going top!')
      }
    }
  }

}
</script>
