<template>
    <div>
        <div class="container-fluid section_banner">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6 text-center">
                    <h1><span>{{$t('education.education')}}</span></h1>
                    <p class="lead">{{$t('education.page-intro')}}</p>
                </div>        
            </div>
        </div>
        <div class="section_body">
            <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
            <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex flex-row justify-content-center">
                        <div class="p-2 align-self-center">
                            <img class="img-fluid"  src="../assets/education/gagls.jpg">
                        </div>
                        <div class="p-2 align-self-center text-center">
                            <h4><span>{{$t('education.high-school')}}</span></h4>
                            <h5>2010-2014</h5>
                            <h6>{{$t('education.institution-website')}}: <a href="https://gaglshe.edupage.org/" target="_blank" rel="noopener noreferrer">https://gaglshe.edupage.org/</a></h6>
                        </div>
                    </div>
                    <hr class="divider--full">
                    <div class="d-flex flex-row justify-content-center">
                        <div class="p-2 align-self-center">
                            <img class="img-fluid" src="../assets/education/APZ.png">
                        </div>
                        <div class="p-2 align-self-center text-center">
                            <h4><span>{{$t('education.university')}}</span></h4>
                            <h5>2014-2017</h5>
                            <p>{{$t('education.university-description')}}</p>
                            <h6>{{$t('education.institution-website')}}: <a href="https://www.akademiapz.sk/" target="_blank" rel="noopener noreferrer">https://www.akademiapz.sk/</a></h6>
                        </div>
                    </div>
                    <hr class="divider--full">
                    <div class="d-flex flex-row justify-content-center">
                        <div class="p-2 align-self-center">
                            <img class="img-fluid"  src="../assets/education/GMIT.png">
                        </div>
                        <div class="p-2 align-self-center text-center">
                            <h4><span>{{$t('education.gmit')}}</span></h4>
                            <h5>2019-2021</h5>
                            <p>{{$t('education.gmit-description')}}</p>
                            <h6>{{$t('education.institution-website')}}: <a href="https://www.gmit.ie/" target="_blank" rel="noopener noreferrer">https://www.gmit.ie/</a></h6>
                            <button type="button" class="btn btn--myPrimary btn-block" data-toggle="modal" data-target="#gmitModules">
                                {{$t('gmit.completed-modules')}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="divider--full">
            <div class="row">
                <div class="col-12 text-center">
                    <h1><span>{{$t('education.udemy-certificates')}}</span></h1>
                    <p class="lead">{{$t('education.udemy-certificates-intro')}}</p>
                </div>
            </div>    
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div id="certificatesCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
                  <div class="carousel-inner text-center">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img-certificate " src="../assets/education/certificates/webDev.jpg" alt="First slide">
                        <div>
                            <h5 class="text-muted text-center"><a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/" target="_blank" rel="noopener noreferrer">{{$t('education.find-out-more')}}</a></h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100 img-certificate"  src="../assets/education/certificates/sql.jpg" alt="Second slide">
                        <div>
                            <h5 class="text-muted text-center"><a href="https://www.udemy.com/course/the-complete-sql-bootcamp/" target="_blank" rel="noopener noreferrer">{{$t('education.find-out-more')}}</a></h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100 img-certificate" src="../assets/education/certificates/laravel.jpg" alt="Third slide">
                        <div>
                            <h5 class="text-muted text-center"><a href="https://www.udemy.com/course/laravel-beginner-fundamentals/" target="_blank" rel="noopener noreferrer">{{$t('education.find-out-more')}}</a></h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100 img-certificate" src="../assets/education/certificates/laravel2.jpg" alt="Fourth slide">
                        <div>
                            <h5 class="text-muted text-center"><a href="https://www.udemy.com/course/php-with-laravel-for-beginners-become-a-master-in-laravel/" target="_blank" rel="noopener noreferrer">{{$t('education.find-out-more')}}</a></h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100 img-certificate" src="../assets/education/certificates/laravel-vue.jpg" alt="Sixth slide">
                        <div>
                            <h5 class="text-muted text-center"><a href="https://www.udemy.com/course/master-laravel-6-with-vuejs-fullstack-development/" target="_blank" rel="noopener noreferrer">{{$t('education.find-out-more')}}</a></h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100 img-certificate" src="../assets/education/certificates/git&Github.jpg" alt="Sixth slide">
                        <div>
                            <h5 class="text-muted text-center"><a href="https://www.udemy.com/course/git-and-github-masterclass/" target="_blank" rel="noopener noreferrer">{{$t('education.find-out-more')}}</a></h5>
                        </div>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#certificatesCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#certificatesCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>

                </div>
            </div>
        <!-- row -->
        </div>
        <!-- container -->
        </div>
        <!-- section_body -->
        <app-education-page-modals></app-education-page-modals>
    </div>

    
</template>
<script>
import AppEducationPageModals from "../components/EducationModals";
import waypointsMixin from "../waypointsMixin";
export default {
    mixins: [waypointsMixin],
    components: {
        AppEducationPageModals
    }
}
</script>