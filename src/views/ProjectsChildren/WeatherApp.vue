<template>
    <div>
        <div class="container-fluid section_banner">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-8 text-center">
                    <h1>{{$t('weather-app.title')}}</h1>
                    <p class="lead">{{$t('weather-app.description-detail')}}</p>
                </div>
            </div>
        </div>
        <div class="section_body">
            <div class="container">
                <div class="row">
                        <div class="col-12 text-center">
                            <img alt=""  class="img-fluid w-100 rounded"  src="../../assets/WeatherApp.jpg">
                        </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                         <h4><span>{{$t('used-technologies')}}</span></h4>
                            <h5><span>Frontend:</span></h5>
                            <p>&nbsp;HTML5,&nbsp;CSS3,&nbsp;Sass,&nbsp;Angular & Ionic&nbsp;(Javascript)</p>
                            
                            <h4><span>{{$t('other-used-technologies')}}</span></h4>
                            <h5><span>{{$t('application-state')}}:</span></h5>
                            <p>Angular services</p>
                            
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row justify-content-center">
                        <div class="col-10 text-center">
                            <h4><span>{{$t('project-features')}}</span></h4>   
                            <h5><span>{{$t('weather-app.bookmarks')}}</span></h5>
                            <p>{{$t('weather-app.bookmarks-detail')}}</p>
                            <hr class="divider--partial">
                            <h5><span>{{$t('weather-app.bookmarks-badge')}}</span></h5>
                            <p>{{$t('weather-app.bookmarks-badge-detail')}}</p>
                            <hr class="divider--partial">
                            <h5><span>{{$t('weather-app.ionic-searchbar')}}</span></h5>
                            <p>{{$t('weather-app.ionic-searchbar-detail')}}</p>
                            <hr class="divider--partial">
                            <h5><span>{{$t('weather-app.rotating-icon')}}</span></h5>
                            <p>{{$t('weather-app.rotating-icon-detail')}}</p>
                        </div>
                </div>
                <hr class="divider--full">
                <div class="row justify-content-center">
                        <h4><span>{{$t('project-demo-singular')}}</span></h4>
                        <div class="col-md-12 ">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/IonicApp.mp4' type="video/mp4">
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
                        <button class="btn btn--mySecondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</button>
                    </div>
                </div>
            </div>
            <!-- container-div -->
        </div>
        <!-- section_body -->
    </div>
    <!-- template div -->
</template>