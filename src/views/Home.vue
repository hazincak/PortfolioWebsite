<template>
  <div>
    <div class="container-fluid section_banner">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-8 text-center">
            <img alt="author" class="img-fluid img-avatar mt-2" src="../assets/me-avatar.jpg">
            <h1><span>{{$t('my-name')}}</span></h1>
            <p class="lead">{{$t('home-page-intro')}}</p>
        </div>
      </div>  
    </div>
    <div class="section_body">
      <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h4><span>{{$t('about')}}</span></h4>
            <p>{{$t('about-detail')}}</p>
            <p>{{$t('about-detail-2')}}</p>
            <p>{{$t('about-detail-3')}}</p>
          </div>
          <div class="col-md-5">
            <h4><span>{{$t('contact')}}</span></h4>
            <div><i class="fab fa-github-square contact-icon"></i><a href="https://github.com/hazincak"  target="_blank" rel="noopener noreferrer">&nbsp;GitHub</a></div>
            <div><i class="fab fa-linkedin contact-icon"></i><a href="https://ie.linkedin.com/in/j%C3%A1n-ha%C5%BEin%C4%8D%C3%A1k-783085204"  target="_blank" rel="noopener noreferrer">&nbsp;LinkedIn</a></div>
            <div><i class="fas fa-envelope-square contact-icon"></i><a href="mailto:jan.hazincak@gmail.com"  target="_blank" rel="noopener noreferrer">&nbsp;jan.hazincak@gmail.com</a></div>
          </div>
        </div>
      </div> 
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src

import waypointsMixin from "../waypointsMixin";
export default {
  mixins: [waypointsMixin],
  name: 'Home',
  components: {
  
  }
}
</script>
