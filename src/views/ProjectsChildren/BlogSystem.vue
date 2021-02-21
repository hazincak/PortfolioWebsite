<template>
    <div>
        <div class="container-fluid section_banner">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-8 text-center">
                    <h1>BlogSystem</h1>
                    <p class="lead">{{$t('blog-system.description-detail')}}</p>
                </div>
            </div>
        </div>
        <div class="section_body">
            <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
            <div class="container">
                <div class="row">
                        <div class="col-12 text-center">
                            <img alt=""  class="img-fluid w-100 rounded"  src="../../assets/BlogSystem.jpg">
                        </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                         <h4><span>{{$t('used-technologies')}}</span></h4>
                            <h5><span>Frontend:</span></h5>
                            <p>&nbsp;HTML5,&nbsp;CSS3,&nbsp;jQuery,&nbsp;Bootstrap,&nbsp;Javascript</p>
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
                            <h5><span>{{$t('dynamic-content')}}</span></h5>
                            <p>{{$t('dynamic-content-detail')}}</p>
                            <div class="row justify-content-center">
                            <div class="col-10">
                            <h6><span>{{$t('manageable-content')}}</span></h6>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{{$t('blog-system.manageable-content.products')}}</li>
                                    <li class="list-group-item">{{$t('blog-system.manageable-content.categories')}}</li>
                                    <li class="list-group-item">{{$t('blog-system.manageable-content.profile')}}</li>
                                    <li class="list-group-item">{{$t('blog-system.manageable-content.comments')}}</li>
                                </ul>
                            </div>
                        </div>
                        <hr>
                            <h5><span>{{$t('laptopmania.user-authentification')}}</span></h5>
                            <p>{{$t('laptopmania.user-authentification-detail')}}</p>
                            <hr class="divider--partial">
                            <h5><span>{{$t('blog-system.sections')}}</span></h5>
                            <p>{{$t('blog-system.sections-detail')}}</p>
                            <hr class="divider--partial">
                            <h5><span>{{$t('blog-system.users-online')}}</span></h5>
                            <p>{{$t('blog-system.users-online-detail')}}</p>
                            <hr class="divider--partial">
                            <h5><span>{{$t('blog-system.searchbar')}}</span></h5>
                            <p>{{$t('blog-system.searchbar-detail')}}</p>
                            <hr class="divider--partial">
                            <h5><span>{{$t('blog-system.editor')}}</span></h5>
                            <p>{{$t('blog-system.editor-detail')}}</p>
                            <hr class="divider--partial">
                        </div>
                </div>
                <hr class="divider--full">
                <div class="row justify-content-center">
                        <h4><span>{{$t('project-demo-singular')}}</span></h4>
                        <div class="col-md-10 ">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/cms--demo.webm' type="video/mp4">
                                             </video>
                                         </div>
                        </div>
                        <!-- column -->
                </div>
                   <!-- row -->
                <hr class="divider--full">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h4><span>{{$t('database-design')}}</span></h4>
                        <div class="row justify-content-center">
                            <div class="col-md-10">
                                <div class="images" v-viewer>
                                    <img class="img-fluid" src="../../assets/dbDiagrams/cms.png">
                                </div>
                               <p>{{$t('click-for-zoom-in')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h4><span>{{$t('source-code')}}</span></h4>
                        <a href="https://github.com/hazincak/cms" target="_blank" rel="noopener noreferrer" class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</a>
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