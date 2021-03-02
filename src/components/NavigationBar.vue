<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-default">
        <a class="navbar-brand" href="#"><img class="img-logo img-fluid" src="../assets/logo.png" alt=""></a>
      
      <button class="navbar-toggler d-lg-none" @click="changeExpanded()" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" :aria-expanded="expanded" aria-label="Toggle navigation">

          <span  role="button" >

            <span v-if="!expanded">
              <i class="fa fa-bars nav-toggler-icon"></i>
            </span>
            <span v-else-if="expanded">
              <i class="far fa-times-circle nav-toggler-icon"></i>
            </span>
            
          </span>
      </button>
  
      
      <div class="navbar-collapse" :class="[expanded ? 'collapse show' : 'collapse']" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="m-2" >
            <router-link to="/">{{ $t('menu.home') }}</router-link> 
          </li>
          <li class="m-2">
            <router-link to="/skills">{{ $t('menu.skills') }}</router-link>
          </li>
          <li class="m-2">
            <router-link :to="{name: 'AllProjects'}">{{ $t('menu.projects') }}</router-link>
          </li>
          <li class="m-2">
            <router-link to="/education">{{ $t('menu.education') }}</router-link>
          </li>
          <!-- <li class="m-2">
            <router-link to="/resume">Resume</router-link>
          </li> -->
        </ul>
    
  </div>
</nav>
</div>
</template>
<script>
export default {
  data(){
    return{
      expanded: false,
    }
  },
  methods: {
    changeExpanded(){
      setTimeout(()=> {
        this.expanded = !this.expanded
      }, 200);
      
    }
  }
}
</script>


