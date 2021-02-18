<template>
    <div>
        <div class="container-fluid section_banner">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6 text-center">
                    <h1><span class="heading--main">{{$t('java.title')}}</span></h1>
                    <p class="lead">{{$t('java.description')}}</p>
                </div>        
            </div>
        </div>
        <div class="section_body">
            <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="m-5">
                            <div class="row align-items-center">
                                <div class="col-md-3 text-center">
                                    <img class="img-fluid"  src="../../assets/techBrandsBadges/java_title.png">
                                </div>
                                <div class="col-md-9 text-center">
                                    <h4><span>{{$t('java-projects.cypher-title')}}</span></h4>
                                    <p>{{$t('java-projects.cypher-description')}}</p>
                                    <a href="https://en.wikipedia.org/wiki/ADFGVX_cipher" target="_blank" rel="noopener noreferrer">{{$t('java-projects.cypher-about')}}</a>
                                    <hr>
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 text-center">
                                            <button class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row">
                    <div class="col-12">
                        <div class="m-5">
                            <div class="row align-items-center">
                                <div class="col-md-3 text-center">
                                    <img class="img-fluid"  src="../../assets/techBrandsBadges/java_title.png">
                                </div>
                                <div class="col-md-9 text-center">
                                    <h4><span>{{$t('java-projects.simplifier-title')}}</span></h4>
                                    <p>{{$t('java-projects.simplifier-description')}}</p>
                                   <div class="row justify-content-center">
                                        <div class="col-md-8 text-center">
                                            <button class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row">
                    <div class="col-12">
                        <div class="m-5">
                            <div class="row align-items-center">
                                <div class="col-md-3 text-center">
                                    <img class="img-fluid"  src="../../assets/techBrandsBadges/java_title.png">
                                </div>
                                <div class="col-md-9 text-center">
                                    <h4><span>{{$t('java-projects.benchmark-title')}}</span></h4>
                                    <p>{{$t('java-projects.benchmark-description')}}</p>
                                    <div class="row justify-content-center">
                                        <div class="col-4 text-center">
                                            <h6>{{$t('java-projects.benchmark-algo')}}</h6>
                                             <ol>
                                                <li>Bubble sort</li>
                                                <li>Selection sort</li>
                                                <li>Merge sort</li>
                                                <li>Quick sort</li>
                                                <li>Counting sort</li>
                                            </ol>
                                        </div>
                                    </div>
                                    
                                    <a :href="link" download="report.pdf" >{{$t('java-projects.report-download')}}</a>
                                    <hr>
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 text-center">
                                            <button class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row">
                    <div class="col-12">
                        <div class="m-5">
                            <div class="row align-items-center">
                                <div class="col-md-3 text-center">
                                    <img class="img-fluid"  src="../../assets/techBrandsBadges/java_title.png">
                                </div>
                                <div class="col-md-9 text-center">
                                    <h4><span>{{$t('java-projects.chat-title')}}</span></h4>
                                    <p>{{$t('java-projects.chat-description')}}</p>
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 text-center">

                                            <div class="dropdown show">
                                              <a class="btn btn--mySecondary btn-block dropdown-toggle" href="#" role="button" id="JavaGitHubProjects" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fab fa-github"></i>&nbsp;GitHub
                                              </a>
                                              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="JavaGitHubProjects">
                                                <a class="dropdown-item" href="#">ChatClient</a>
                                                <a class="dropdown-item" href="#">ChatServer</a>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import waypointsMixin from "./../../waypointsMixin";
export default {
    mixins: [waypointsMixin],
    data(){
        return{
            link: require('@/assets/downloadable/AlgoReport.pdf')
        }
    }
}
</script>
