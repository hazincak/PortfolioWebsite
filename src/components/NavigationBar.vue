<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="m-2" >
        <a >Language:</a>
      </li>
      <li class="m-2" >
        <router-link to="/">Home</router-link> 
      </li>
      <li class="m-2">
        <router-link to="/skills">Programming skills</router-link>
      </li>
      <li class="m-2">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="m-2">
        <router-link to="/education">Education</router-link>
      </li>
      <li class="m-2">
        <router-link to="/resume">Resume</router-link>
      </li>
    </ul>
    
  </div>
</nav>
</div>
</template>