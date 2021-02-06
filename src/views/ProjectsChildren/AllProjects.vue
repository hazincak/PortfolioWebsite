<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-6 text-center">
                <h1><span>{{$t('my-projects')}}</span></h1>
                <p class="lead">{{$t('projects-page-intro')}}</p>
            </div>        
        </div>
        <hr>
        
            <div class="col-12">
                <div class="m-5">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img alt="project-thumbnail" class="img-fluid"  src="../../assets/PhoneCasesShop.jpg">
                        </div>
                        <div class="col-md-6">
                            <h4><span>PhoneCasesShop</span></h4>
                            <p>{{$t('e-commerce-description')}}</p>
                            <router-link :to="{name: 'PhoneCasesShopProject'}" class="btn btn-secondary btn-block">{{$t('more-button')}}</router-link>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="d-flex justify-content-center">
                                <img id="img-bootstrap" src="../../assets/techBrands/bootstrap.png" alt="bootstrap-logo">
                                <img class="img-tech-brand" src="../../assets/techBrands/vuejs.png" alt="vue-logo">
                                <img class="img-tech-brand" src="../../assets/techBrands/sass.png" alt="sass-logo">
                                <img class="img-tech-brand" src="../../assets/techBrands/laravel.png" alt="laravel-logo">
                                <img class="img-tech-brand" src="../../assets/techBrands/mysql.png" alt="mysql-logo">
                            </div>

                        </div>
                    </div>
                    <hr>
                </div>
                <div class="m-5"> 
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img alt="project-thumbnail" class="img-fluid rounded img-thumbnail"  src="../../assets/WeatherApp.jpg">
                        </div>
                        <div class="col-md-6">
                            <h4><span>Weather and News application</span></h4>
                            <p>{{$t('e-commerce-description')}}</p>
                            <router-link :to="{name: 'WeatherAppProject'}" class="btn btn-secondary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="d-flex justify-content-center">
                            <img class="img-tech-brand" src="../../assets/techBrands/angular.png" alt="html-logo">
                            <img class="img-tech-brand" src="../../assets/techBrands/ionic.png" alt="jquery-logo">
                            </div>

                        </div>
                    </div>
                    <hr>
                </div>
                <div class="m-5">   
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img alt="project-thumbnail" class="img-fluid rounded img-thumbnail"  src="../../assets/laptopmania.jpg">
                        </div>
                        <div class="col-md-6">
                            <h4><span>Laptopmania</span></h4>
                            <p>{{$t('e-commerce-description')}}</p>
                            <router-link :to="{name: 'LaptopmaniaProject'}" class="btn btn-secondary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                                <div class="d-flex justify-content-center">
                                <img class="img-tech-brand" src="../../assets/techBrands/html5.png" alt="html-logo">
                                <img id="img-php" src="../../assets/techBrands/php.png" alt="php-logo">
                                <img class="img-tech-brand" src="../../assets/techBrands/jquery.png" alt="jquery-logo">
                                <img class="img-tech-brand" src="../../assets/techBrands/sass.png" alt="sass-logo">
                                <img class="img-tech-brand" src="../../assets/techBrands/mysql.png" alt="mysql-logo">
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="m-5">   
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img alt="project-thumbnail" class="img-fluid rounded img-thumbnail"  src="../../assets/SapConcur.jpg">
                        </div>
                        <div class="col-md-6">
                            <h4><span>SAP Concur</span></h4>
                            <p>{{$t('e-commerce-description')}}</p>
                            <router-link :to="{name: 'SapConcurProject'}" class="btn btn-secondary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                                <div class="d-flex justify-content-center">
                                    <img id="img-wordpress" src="../../assets/techBrands/wordpress.png" alt="wordpress-logo">
                                    <img class="img-tech-brand" src="../../assets/techBrands/lamp.png" alt="lamp-logo">
                                    <img class="img-tech-brand" src="../../assets/techBrands/ec2.png" alt="ec2-logo">
                                </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="m-5">   
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img alt="project-thumbnail" class="img-fluid rounded img-thumbnail"  src="../../assets/BlogSystem.jpg">
                        </div>
                        <div class="col-md-6">
                            <h4><span>BlogSystem</span></h4>
                            <p>{{$t('e-commerce-description')}}</p>
                            <router-link :to="{name: 'BlogSystemProject'}" class="btn btn-secondary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                                <div class="d-flex justify-content-center">
                                    <img id="img-php" src="../../assets/techBrands/php.png" alt="php-logo">
                                    <img class="img-tech-brand" src="../../assets/techBrands/mysql.png" alt="mysql-logo">
                                </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="m-5">   
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img alt="project-thumbnail" class="img-fluid rounded img-thumbnail"  src="../../assets/MovieFight.jpg">
                        </div>
                        <div class="col-md-6">
                            <h4><span>MovieFight</span></h4>
                            <p>{{$t('e-commerce-description')}}</p>
                            <router-link :to="{name: 'MovieFightProject'}" class="btn btn-secondary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                                <div class="d-flex justify-content-center">
                                    <img class="img-tech-brand" src="../../assets/techBrands/lamp.png" alt="lamp-logo">
                                    <img class="img-tech-brand" src="../../assets/techBrands/ec2.png" alt="ec2-logo">
                                </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="m-5">   
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img alt="project-thumbnail" class="img-fluid rounded img-thumbnail"  src="../../assets/SapConcur.jpg">
                        </div>
                        <div class="col-md-6">
                            <h4><span>Java projects</span></h4>
                            <p>{{$t('e-commerce-description')}}</p>
                            <router-link :to="{name: 'JavaProjects'}" class="btn btn-secondary btn-block">{{$t('more-button')}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
</template>