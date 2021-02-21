<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-default">
        <a class="navbar-brand" href="#"><img class="img-logo img-fluid" src="../assets/logo.png" alt=""></a>
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->
  <div type="button" class="d-lg-none" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars nav-toggler-icon"></i>
  </div>
  <div class="collapse navbar-collapse" id="navbarNav">
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

</script>