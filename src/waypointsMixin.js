export default{
    data: () => ({
        stickyNavbar: false,
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
            this.stickyNavbar = false;
            let navbar = document.querySelector('nav');
            navbar.classList.remove('fixed-top');
            console.log(this.stickyNavbar);
          }
     
          if (direction === this.$waypointMap.DIRECTION_TOP) {
            let navbar = document.querySelector('nav');
            navbar.classList.add('fixed-top');
            this.stickyNavbar = true;
            console.log(this.stickyNavbar);
          }
        }
      }
}