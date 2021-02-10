<template>
  <div>
    <div class="container-fluid section_banner">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-6 text-center">
            <img alt="author" class="img-fluid img-avatar" src="../assets/me-avatar.jpg">
            <h1><span>{{$t('my-name')}}</span></h1>
            <p class="lead">{{$t('home-page-intro')}}</p>
        </div>
      </div>  
    </div>
    <div class="section_body">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h4><span>{{$t('about-me')}}</span></h4>
            <p>{{$t('about-me-detail')}}</p>
          </div>
          <div class="col-md-5">
            <h4><span>{{$t('contact')}}</span></h4>
            <div><i class="fab fa-github-square contact-icon"></i>&nbsp;GitHub</div>
            <div><i class="fab fa-linkedin contact-icon"></i>&nbsp;LinkedIn</div>
            <div><i class="fas fa-envelope-square contact-icon"></i>&nbsp;jan.hazincak@gmail.com</div>
          </div>
        </div>
      </div> 
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  
  }
}
</script>
