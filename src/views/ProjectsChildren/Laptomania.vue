<template>
    <div>
        <div class="container-fluid section_banner">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-8 text-center">
                    <h1>{{$t('laptopmania.title')}}</h1>
                    <p class="lead">{{$t('laptopmania.description-detail')}}</p>
                </div>
            </div>
        </div>
        <div class="section_body">
            <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
            <div class="container">
                <div class="row">
                        <div class="col-12 text-center">
                            <img alt=""  class="img-fluid w-100 rounded"  src="../../assets/laptopmania.jpg">
                        </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                         <h4><span>{{$t('used-technologies')}}</span></h4>
                            <h5><span>Frontend:</span></h5>
                            <p>&nbsp;HTML5,&nbsp;CSS3,&nbsp;Bootstrap,&nbsp;Sass,&nbsp;jQuery&nbsp;(Javascript)</p>
                            <h5><span>Backend:</span></h5>
                            <p>PHP</p>
                            <h5><span>{{$t('database')}}</span></h5>
                            <p>MySQL</p>
                            
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row justify-content-center">
                        <div class="col-10 text-center">
                            <h4><span>{{$t('project-features')}}</span></h4>   
                            <h5><span>{{$t('laptopmania.shopping-cart')}}</span></h5>
                            <p>{{$t('laptopmania.shopping-cart-detail')}}</p>
                            <h5><span>{{$t('laptopmania.price-calculation')}}</span></h5>
                            <p>{{$t('laptopmania.price-calculation-detail')}}</p>
                            <h5><span>{{$t('laptopmania.user-authentification')}}</span></h5>
                            <p>{{$t('laptopmania.user-authentification-detail')}}</p>
                            <hr class="divider--partial">
                        </div>
                </div>
                <hr class="divider--full">
                <div class="row justify-content-center">
                        <h4><span>{{$t('project-demo-plural')}}</span></h4>
                        <div class="col-md-10 ">
                            <div id="carouselExampleControls" class="carousel slide" data-interval="false" data-touch="true" data-ride="carousel">
                         <div class="carousel-inner">
                                <div class="carousel-item active">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/laptomania-guest.webm' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-center">{{$t('laptopmania-videos.order-guest')}}</h5>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/laptopmania-registered.webm' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-center">{{$t('laptopmania-videos.order-registered')}}</h5>
                                         </div>
                                </div>
                                
                         </div>
                         <!-- carousel-inner -->
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                        </div>
                        <!-- carousel -->
                        </div>
                </div>  
                   <!-- row -->
                <hr class="divider--full">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h4><span>{{$t('database-design')}}</span></h4>
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <div class="images" v-viewer>
                                    <img class="img-fluid" src="../../assets/dbDiagrams/laptopmania.png">
                                </div>
                               <p>{{$t('click-for-zoom-in')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h4><span>{{$t('source-code')}}</span></h4>
                        <a href="https://github.com/hazincak/laptopmania" target="_blank" rel="noopener noreferrer" class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</a>
                    </div>
                </div>
            </div>
            <!-- container-div -->
        </div>
        <!-- section_body -->
    </div>
    <!-- template div -->
</template>
<script>
import waypointsMixin from "./../../waypointsMixin";
export default {
    mixins: [waypointsMixin],
}
</script>