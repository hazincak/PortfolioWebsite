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
                    <div class="col-12 p-0">
                        <div class="m-5">
                            <div class="row align-items-center">
                                <div class="col-md-3 p-0 p-md-2 text-center">
                                    <img class="img-fluid img-java"  src="../../assets/techBrandsBadges/java_title.png">
                                </div>
                                <div class="col-md-9 p-0 p-md-2 text-center">
                                    <h4><span>{{$t('java-projects.cypher-title')}}</span></h4>
                                    <p>{{$t('java-projects.cypher-description')}}</p>
                                    <a href="https://en.wikipedia.org/wiki/ADFGVX_cipher" target="_blank" rel="noopener noreferrer">{{$t('java-projects.cypher-about')}}</a>
                                    <hr>
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 text-center">
                                            <a href="https://github.com/hazincak/PolybiusProject" target="_blank" rel="noopener noreferrer" class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="m-5">
                            <div class="row align-items-center">
                                <div class="col-md-3 p-0 p-md-2 text-center">
                                    <img class="img-fluid img-java"  src="../../assets/techBrandsBadges/java_title.png">
                                </div>
                                <div class="col-md-9 p-0 p-md-2 text-center">
                                    <h4><span>{{$t('java-projects.simplifier-title')}}</span></h4>
                                    <p>{{$t('java-projects.simplifier-description')}}</p>
                                   <div class="row justify-content-center">
                                        <div class="col-md-8 text-center">
                                            <a href="https://github.com/hazincak/TextSimplifier" target="_blank" rel="noopener noreferrer" class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="m-5">
                            <div class="row align-items-center">
                                <div class="col-md-3 p-0 p-md-2 text-center">
                                    <img class="img-fluid img-java"  src="../../assets/techBrandsBadges/java_title.png">
                                </div>
                                <div class="col-md-9 p-0 p-md-2 text-center">
                                    <h4><span>{{$t('java-projects.benchmark-title')}}</span></h4>
                                    <p>{{$t('java-projects.benchmark-description')}}</p>
                                    <div class="row justify-content-center">
                                        <div class="col-8 text-center">
                                            <h6>{{$t('java-projects.benchmark-algo')}}</h6>
                                             <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Bubble sort</li>
                                                <li class="list-group-item">Selection sort</li>
                                                <li class="list-group-item">Merge sort</li>
                                                <li class="list-group-item">Quick sort</li>
                                                <li class="list-group-item">Counting sort</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <a :href="link" download="report.pdf" >{{$t('java-projects.report-download')}}</a>
                                    <hr>
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 text-center">
                                            <a href="https://github.com/hazincak/CTA_SortBenchmark" target="_blank" rel="noopener noreferrer" class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="m-5">
                            <div class="row align-items-center">
                                <div class="col-md-3 p-0 p-md-2 text-center">
                                    <img class="img-fluid img-java"  src="../../assets/techBrandsBadges/java_title.png">
                                </div>
                                <div class="col-md-9 p-0 p-md-2 text-center">
                                    <h4><span>{{$t('java-projects.chat-title')}}</span></h4>
                                    <p>{{$t('java-projects.chat-description')}}</p>
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 text-center">

                                            <div class="dropdown show">
                                              <a class="btn btn--mySecondary btn-block dropdown-toggle" href="#" role="button" id="JavaGitHubProjects" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fab fa-github"></i>&nbsp;GitHub
                                              </a>
                                              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="JavaGitHubProjects">
                                                <a class="dropdown-item" href="https://github.com/hazincak/NetworkProgramming-ChatClient" target="_blank" rel="noopener noreferrer">ChatClient</a>
                                                <a class="dropdown-item" href="https://github.com/hazincak/NetworkProgramming-ChatServer" target="_blank" rel="noopener noreferrer">ChatServer</a>
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
