<template>
    <div>
        <div class="container-fluid section_banner">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6 text-center ">
                    <h1><span>{{$t('menu.skills')}}</span></h1>
                </div>
            </div>
        </div>
        <div class="section_body">
            <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <h4><span>HTML & CSS</span></h4>
                            <hr class="full">
                            <div class="d-flex justify-content-around align-items-end">
                                <div class="p-2 ">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/html5-badge.png" alt="">
                                    <p class="text-center mb-0">HTML5</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/css3-badge.png" alt="">
                                    <p class="text-center mb-0">CSS3</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/bootstrap.png" alt="">
                                    <p class="text-center mb-0">Bootstrap</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/bootstrap-vue-badge.png" alt="">
                                    <p class="text-center mb-0">BootstrapVue</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrands/sass.png" alt="">
                                    <p class="text-center mb-0">Sass</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider--full">
                        <div>
                            <h4>Javascript</h4>
                            <hr>
                            <div class="d-flex justify-content-around align-items-end">
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/javascript-badge.png" alt="">
                                    <p class="text-center">Javascript</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/typescript.png" alt="">
                                    <p class="text-center">Typescript</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/jquery-badge.png" alt="">
                                    <p class="text-center">jQuery</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/vue-badge.png" alt="">
                                    <p class="text-center">Vuejs</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/angular.png" alt="">
                                    <p class="text-center">Angular</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/ionic-badge.png" alt="">
                                    <p class="text-center">Ionic</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider--full">
                        <div>
                            <h4>Backend & {{$t('databases')}}</h4>
                            <hr>
                            <div class="d-flex justify-content-around align-items-end">
                                <div class="p-2">
                                    <img  class="img-fluid"  src="../assets/techBrandsBadges/php.png" alt="">
                                    <p class="text-center">PHP</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/laravel-badge.png" alt="">
                                    <p class="text-center">Laravel</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/mysql.png" alt="">
                                    <p class="text-center">MySQL</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider--full">
                        <div>
                            <h4>Package managers</h4>
                            <hr>
                            <div class="d-flex justify-content-around align-items-end">
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/npm.png" alt="">
                                    <p class="text-center">NPM</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/conposer.png" alt="">
                                    <p class="text-center">Composer</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider--full">
                        <div>
                            <h4>{{$t('experience-with')}}</h4>
                            <hr>
                            <div class="d-flex justify-content-around align-items-end">
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/Java.png" alt="">
                                    <p class="text-center">Java</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/wordpress.png" alt="">
                                    <p class="text-center">Wordpress</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/firebase.png" alt="">
                                    <p class="text-center">Firebase</p>
                                </div>
                                <div class="p-2">
                                    <img id="img-postgreSQL" class="img-fluid" src="../assets/techBrandsBadges/PostgreSQL.png" alt="">
                                    <p class="text-center">PostgreSQL</p>
                                </div>
                                <div class="p-2">
                                    <img id="img-postgreSQL" class="img-fluid" src="../assets/techBrandsBadges/bulma.png" alt="">
                                    <p class="text-center">Bulma</p>
                                </div>       
                            </div>
                        </div>
                        <hr class="divider--full">
                        <div>
                            <h4>{{$t('used-software')}}</h4>
                            <hr>
                            <div class="d-flex justify-content-around align-items-baseline">
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/gitBash.png" alt="">
                                    <p class="text-center">Git Bash</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/gitHub.png" alt="">
                                    <p class="text-center">GitHub</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/intelij.png" alt="">
                                    <p class="text-center">IntelliJ IDEA</p>
                                </div>
                                <div class="p-2 text-center">
                                    <img id="img-postgreSQL" class="img-fluid" src="../assets/techBrandsBadges/vsc.png" alt="">
                                    <p class="text-center">Visual Studio Code</p>
                                </div>
                                <div class="p-2">
                                    <img id="img-postgreSQL" class="img-fluid" src="../assets/techBrandsBadges/postman.png" alt="">
                                    <p class="text-center">Postman</p>
                                </div>
                                <div class="p-2">
                                    <img id="img-postgreSQL" class="img-fluid" src="../assets/techBrandsBadges/gimp.png" alt="">
                                    <p class="text-center">GIMP</p>
                                </div>
                                <div class="p-2 text-center">
                                    <img id="img-postgreSQL" class="img-fluid" src="../assets/techBrandsBadges/logoDesign.png" alt="">
                                    <p class="text-center">Logo Design Studio Pro</p>
                                </div>        
                            </div>
                        </div>

                    </div>
                </div>
            <!-- row -->
            </div>
            <!-- container -->
        </div>
        <!-- section_body -->
    </div>
</template>
<script>
import waypointsMixin from "../waypointsMixin";
export default {
    mixins: [waypointsMixin],
}
</script>