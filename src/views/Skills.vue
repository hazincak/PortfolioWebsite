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
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/html5-badge.png" alt="">
                                    <p class="text-center text-muted mb-0">HTML5</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/css3-badge.png" alt="">
                                    <p class="text-center text-muted mb-0">CSS3</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/bootstrap.png" alt="">
                                    <p class="text-center text-muted mb-0">Bootstrap</p>
                                </div>
                                <div class="p-2 text-center">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/bootstrap-vue-badge.png" alt="">
                                    <p class="text-center text-muted mb-0">BootstrapVue</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-sass" src="../assets/techBrands/sass.png" alt="">
                                    <p class="text-center text-muted mb-0">Sass</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider--full">
                        <div>
                            <h4>Javascript</h4>
                            <hr>
                            <div class="d-flex justify-content-around align-items-end">
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/javascript-badge.png" alt="">
                                    <p class="text-center text-muted">Javascript</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/typescript.png" alt="">
                                    <p class="text-center text-muted">Typescript</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/jquery-badge.png" alt="">
                                    <p class="text-center text-muted">jQuery</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge pt-2 pt-md-0" src="../assets/techBrandsBadges/vue-badge.png" alt="">
                                    <p class="text-center text-muted ">Vuejs</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/angular.png" alt="">
                                    <p class="text-center text-muted">Angular</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/ionic-badge.png" alt="">
                                    <p class="text-center text-muted">Ionic</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider--full">
                        <div>
                            <h4>Backend & {{$t('databases')}}</h4>
                            <hr>
                            <div class="d-flex justify-content-around align-items-end">
                                <div class="p-2">
                                    <img  class="img-fluid img-badge"  src="../assets/techBrandsBadges/php.png" alt="">
                                    <p class="text-center text-muted">PHP</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/laravel-badge.png" alt="">
                                    <p class="text-center text-muted">Laravel</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/mysql.png" alt="">
                                    <p class="text-center text-muted">MySQL</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider--full">
                        <div>
                            <h4>Package managers</h4>
                            <hr>
                            <div class="d-flex justify-content-around align-items-end">
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/npm.png" alt="">
                                    <p class="text-center text-muted">NPM</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/conposer.png" alt="">
                                    <p class="text-center text-muted">Composer</p>
                                </div>
                            </div>
                        </div>
                        <hr class="divider--full">
                        <div>
                            <h4>{{$t('experience-with')}}</h4>
                            <hr>
                            <div class="d-flex justify-content-around align-items-end">
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/Java.png" alt="">
                                    <p class="text-center text-muted">Java</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/wordpress.png" alt="">
                                    <p class="text-center text-muted">Wordpress</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid img-badge" src="../assets/techBrandsBadges/firebase.png" alt="">
                                    <p class="text-center text-muted">Firebase</p>
                                </div>
                                <div class="p-2">
                                    <img id="img-postgreSQL" class="img-fluid img-badge" src="../assets/techBrandsBadges/PostgreSQL.png" alt="">
                                    <p class="text-center text-muted">PostgreSQL</p>
                                </div>
                                <div class="p-2">
                                    <img id="img-postgreSQL" class="img-fluid img-badge" src="../assets/techBrandsBadges/bulma.png" alt="">
                                    <p class="text-center text-muted">Bulma</p>
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
                                    <p class="text-center text-muted">Git Bash</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/gitHub.png" alt="">
                                    <p class="text-center text-muted">GitHub</p>
                                </div>
                                <div class="p-2">
                                    <img  class="img-fluid" src="../assets/techBrandsBadges/intelij.png" alt="">
                                    <p class="text-center text-muted">IntelliJ IDEA</p>
                                </div>
                                <div class="p-2 text-center">
                                    <img class="img-fluid" src="../assets/techBrandsBadges/vsc.png" alt="">
                                    <p class="text-center text-muted">Visual Studio Code</p>
                                </div>
                                <div class="p-2">
                                    <img class="img-fluid" src="../assets/techBrandsBadges/postman.png" alt="">
                                    <p class="text-center text-muted">Postman</p>
                                </div>
                                <div class="p-2">
                                    <img class="img-fluid" src="../assets/techBrandsBadges/gimp.png" alt="">
                                    <p class="text-center text-muted">GIMP</p>
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