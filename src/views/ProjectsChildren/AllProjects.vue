<template>
    <div>
        <div class="container-fluid section_banner">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6 text-center">
                    <h1><span class="heading--main">{{$t('my-projects')}}</span></h1>
                     <p class="lead">{{$t('projects-page-intro')}}</p>
                </div>        
            </div>
        </div>
        <div class="section_body">
            <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
            <div class="container">
            <div class="row">
                <div class="col-12 p-0">
                <div class="m-5">
                    <div class="row align-items-center">
                        <div class="col-md-6 p-0 p-md-2">
                            <img class="img-fluid img-thumbnail"  src="../../assets/PhoneCasesShop.jpg">
                        </div>
                        <div class="col-md-6 p-0 p-md-2 text-center">
                            <h4><span>{{$t('phone-cases-shop.title')}}</span></h4>
                            <p>{{$t('phone-cases-shop.description')}}</p>
                            <router-link :to="{name: 'PhoneCasesShopProject'}" class="btn btn--myPrimary btn-block">{{$t('more-button')}}</router-link>
                     
                           
                            
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 ">
                            <div class="d-flex justify-content-around align-items-center">
                                <div class="p-1 p-md-2  ">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/html5-badge.png" alt="html-badge">
                                </div>
                                <div class="p-1 p-md-2 ">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/css3-badge.png" alt="css-badge">
                                </div>
                                <div class="p-1 p-md-2 ">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/javascript-badge.png" alt="js-badge">
                                </div>
                                <div class="p-1 p-md-2 ">
                                    <img class="img-fluid" src="../../assets/techBrands/bootstrap.png" alt="bootstrap-logo">
                                </div>
                                <div class="p-1 p-md-2 ">
                                    <img class="img-fluid" src="../../assets/techBrands/vuejs.png" alt="vue-logo">
                                </div>
                                <div class="p-1 p-md-2 ">
                                    <img class="img-fluid" src="../../assets/techBrands/sass.png" alt="sass-logo">
                                </div>
                                <div class="p-1 p-md-2 ">
                                    <img class="img-fluid" src="../../assets/techBrands/laravel.png" alt="laravel-logo">
                                </div>
                                <div class="p-1 p-md-2 ">
                                    <img class="img-fluid" src="../../assets/techBrands/mysql.png" alt="mysql-logo">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="m-5"> 
                    <div class="row align-items-center">
                        <div class="col-md-6 p-0 p-md-2">
                            <img class="img-fluid rounded img-thumbnail"  src="../../assets/WeatherApp.jpg">
                        </div>
                        <div class="col-md-6 p-0 p-md-2 text-center">
                            <h4><span>{{$t('weather-app.title')}}</span></h4>
                            <p>{{$t('weather-app.description')}}</p>
                            <router-link :to="{name: 'WeatherAppProject'}" class="btn btn--myPrimary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-9 col-md-7">
                            <div class="d-flex justify-content-around align-items-center">
                                <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/html5-badge.png" alt="html-badge">
                                </div>
                                <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/css3-badge.png" alt="css-badge">
                                </div>
                                <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/typescript.png" alt="ts-badge">
                                </div>
                                <div class="p-1 p-md-2">
                                     <img class="img-fluid" src="../../assets/techBrands/sass.png" alt="sass-logo">
                                </div>
                                <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrands/angular.png" alt="html-logo">
                                </div>
                                <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrands/ionic.png" alt="jquery-logo">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="m-5">   
                    <div class="row align-items-center">
                        <div class="col-md-6 p-0 p-md-2">
                            <img class="img-fluid rounded img-thumbnail"  src="../../assets/BlogSystem.jpg">
                        </div>
                        <div class="col-md-6 p-0 p-md-2 text-center">
                            <h4><span>BlogSystem</span></h4>
                            <p>{{$t('blog-system.description')}}</p>
                            <router-link :to="{name: 'BlogSystemProject'}" class="btn btn--myPrimary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-9">
                                <div class="d-flex justify-content-around align-items-center">
                                   <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/html5-badge.png" alt="html-badge">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrandsBadges/css3-badge.png" alt="css-badge">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrandsBadges/javascript-badge.png" alt="js-badge">
                                    </div>    
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/jquery.png" alt="jquery-logo">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/bootstrap.png" alt="bootstrap-logo">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/php.png" alt="php-logo">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/mysql.png" alt="mysql-logo">
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="m-5">   
                    <div class="row align-items-center ">
                        <div class="col-md-6 p-0 p-md-2">
                            <img class="img-fluid rounded img-thumbnail"  src="../../assets/laptopmania.jpg">
                        </div>
                        <div class="col-md-6 p-0 p-md-2 text-center">
                            <h4><span>LaptopMania</span></h4>
                            <p>{{$t('laptopmania.description')}}</p>
                            <router-link :to="{name: 'LaptopmaniaProject'}" class="btn btn--myPrimary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10">
                                <div class="d-flex justify-content-around align-items-center">
                                    <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/html5-badge.png" alt="html-badge">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrandsBadges/css3-badge.png" alt="css-badge">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrandsBadges/javascript-badge.png" alt="js-badge">
                                    </div>   
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/bootstrap.png" alt="bootstrap-logo">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/jquery.png" alt="jquery-logo">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/sass.png" alt="sass-logo">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/php.png" alt="php-logo">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/mysql.png" alt="mysql-logo">
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="m-5">   
                    <div class="row align-items-center">
                        <div class="col-md-6 p-0 p-md-2">
                            <img class="img-fluid rounded img-thumbnail"  src="../../assets/SapConcur.jpg">
                        </div>
                        <div class="col-md-6 p-0 p-md-2 text-center">
                            <h4><span>SAP Concur</span></h4>
                            <p>{{$t('sap-concur.description')}}</p>
                            <a href="http://janhazincak.tk" target="_blank" rel="noopener noreferrer" class="btn btn--myPrimary btn-block">{{$t('more-button')}}</a>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-9 col-md-5">
                                <div class="d-flex justify-content-around align-items-center">
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/wordpress.png" alt="wordpress-logo">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/lamp.png" alt="lamp-logo">
                                    </div>
                                    <div class="p-1 p-md-2">
                                        <img class="img-fluid" src="../../assets/techBrands/ec2.png" alt="ec2-logo">
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="m-5"> 
                    <div class="row align-items-center">
                        <div class="col-md-6 p-0 p-md-2">
                            <img class="img-fluid rounded img-thumbnail"  src="../../assets/portfolio.jpg">
                        </div>
                        <div class="col-md-6 p-0 p-md-2 text-center">
                            <h4><span>{{$t('portfolio')}} website</span></h4>
                            <a href="https://github.com/hazincak/PortfolioWebsite" target="_blank" rel="noopener noreferrer" class="btn btn--myPrimary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</a>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-9 col-md-6 p-0 p-md-2">
                            <div class="d-flex justify-content-around align-items-center">
                                <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/html5-badge.png" alt="html-badge">
                                </div>
                                <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/css3-badge.png" alt="css-badge">
                                </div>
                                <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrandsBadges/javascript-badge.png" alt="js-badge">
                                </div>
                                <div class="p-1 p-md-2 ">
                                    <img class="img-fluid" src="../../assets/techBrands/bootstrap.png" alt="bootstrap-logo">
                                </div>
                                <div class="p-1 p-md-2">
                                     <img class="img-fluid" src="../../assets/techBrands/sass.png" alt="sass-logo">
                                </div>
                                <div class="p-1 p-md-2">
                                    <img class="img-fluid" src="../../assets/techBrands/vuejs.png" alt="html-logo">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="m-5">   
                    <div class="row align-items-center">
                        <div class="col-md-6 p-0 p-md-2">
                            <img class="img-fluid rounded "  src="../../assets/techBrands/java.png">
                        </div>
                        <div class="col-md-6 p-0 p-md-2 text-center">
                            <h4><span>{{$t('java.title')}}</span></h4>
                            <p>{{$t('java.description')}}</p>
                            <router-link :to="{name: 'JavaProjects'}" class="btn btn--myPrimary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
        </div>
        <!-- section-body -->
    </div>
</template>
<script>
import waypointsMixin from "./../../waypointsMixin";
export default {
    mixins: [waypointsMixin],
}
</script>