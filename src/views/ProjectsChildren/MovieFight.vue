<template>
    <div>
        <div class="container-fluid section_banner">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-8 text-center">
                    <h1>MovieFight</h1>
                    <p class="lead">{{$t('movie-fight.description-detail')}}</p>
                </div>
            </div>
        </div>
        <div class="section_body">
            <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
            <div class="container">
                <div class="row">
                        <div class="col-12 text-center">
                            <img alt=""  class="img-fluid w-100 rounded"  src="../../assets/MovieFight.jpg">
                        </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                         <h4><span>{{$t('used-technologies')}}</span></h4>
                            <h5><span>Frontend:</span></h5>
                            <p>&nbsp;HTML5,&nbsp;CSS3,&nbsp;Bulma,&nbsp;Javascript</p>
                    </div>
                </div>
        
                <hr class="divider--full">
                <div class="row justify-content-center">
                        <h4><span>{{$t('project-demo-singular')}}</span></h4>
                        <div class="col-md-10 ">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/MovieFight.webm' type="video/mp4">
                                             </video>
                                         </div>
                        </div>
                        <!-- column -->
                </div>
                   <!-- row -->
                   <hr class="divider--full">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h4><span>{{$t('source-code')}}</span></h4>
                        <a href="https://github.com/hazincak/movieFight" target="_blank" rel="noopener noreferrer" class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</a>
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