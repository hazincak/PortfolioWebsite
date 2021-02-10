<template>
    <div>
        <div class="container-fluid section_banner">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-8 text-center">
                    <h1>Phone Cases Shop</h1>
                    <p class="lead">{{$t('phone-cases-shop.description-detail')}}</p>
                </div>
            </div>
        </div>
        <div class="section_body">
            <div class="container">
                <div class="row">
                        <div class="col-12 text-center">
                            <img alt=""  class="img-fluid w-100 rounded"  src="../../assets/PhoneCasesShop.jpg">
                        </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                         <h3><span>{{$t('used-technologies')}}</span></h3>
                            <h5><span>Frontend:</span></h5>
                            <p>&nbsp;HTML5,&nbsp;CSS3,&nbsp;Sass,&nbsp;VueJS&nbsp;(Javascript)</p>
                            <h5><span>Backend:</span></h5>
                            <p>&nbsp;Laravel&nbsp;(PHP)</p>
                            <h5><span>{{$t('database')}}:</span></h5>
                            <p>&nbsp;MySQL&nbsp;(SQL)</p> 

                            <h3><span>{{$t('other-used-technologies')}}</span></h3>
                            <h5><span>{{$t('application-state')}}:</span></h5>
                            <p>Vuex</p>
                            <h5><span>{{$t('application-state')}}:</span></h5>
                            <p>PayPal,&nbsp;Stripe</p> 
                    </div>
                </div>
                <hr class="divider--full">
                <div class="row justify-content-center">
                        <div class="col-10 text-center">
                        <h3><span>{{$t('project-features')}}</span></h3>   
                        <h5><span>{{$t('dynamic-content')}}</span></h5>
                        <p>{{$t('dynamic-content-detail')}}</p>
                        <div class="row justify-content-center">
                            <div class="col-6">
                            <h6><span>{{$t('manageable-content')}}</span></h6>
                                <ol>
                                    <li>{{$t('phone-cases-shop.manageable-content-items.carousel')}}</li>
                                    <li>{{$t('phone-cases-shop.manageable-content-items.products-features')}}</li>
                                    <li>{{$t('phone-cases-shop.manageable-content-items.products')}}</li>
                                    <li>{{$t('phone-cases-shop.manageable-content-items.other-pages')}}</li>
                                </ol>
                            </div>
                        </div>
                        <hr class="divider--partial">
                        <h5><span>{{$t('admin-section')}}&nbsp;and&nbsp;{{$t('authentification')}}</span></h5>
                        <p>{{$t('phone-cases-shop.admin-section-detail')}}</p>
                        <hr class="divider--partial">
                        <h5><span>{{$t('email-notification')}}</span></h5>
                        <p>{{$t('phone-cases-shop.email-notification-detail')}}</p>
                        <hr class="divider--partial">
                        <h5><span>{{$t('responsiveness')}}</span></h5>
                        <p>{{$t('phone-cases-shop.responsiveness-detail')}}</p>
                        <hr class="divider--partial">
                        <h5><span>{{$t('shopping-cart')}}</span></h5>
                        <p>{{$t('phone-cases-shop.shopping-cart-details')}}</p>
                        <hr class="divider--partial">
                        <h5>{{$t('payment-gateways')}}</h5>
                        </div>
                </div>
                <hr class="divider--full">
                <div class="row">
                    <div class="col-md-12">

                    </div>
                </div>
                <div class="row justify-content-center">
                        <h3><span>{{$t('project-demo')}}</span></h3>
                        <div class="col-md-12 ">
                            <div id="carouselExampleControls" class="carousel slide" data-interval="false" data-touch="true" data-ride="carousel">
                         <div class="carousel-inner">
                                <div class="carousel-item active">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/CategoryCRUD.webm' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.categoryCRUD')}}</h5>
                                             <p class="text-muted text-center">{{$t('phone-cases-shop-videos.categoryCRUD-detail')}}</p>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/addingModel.mp4' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.creating-model')}}</h5>
                                             <p class="text-muted text-center">{{$t('phone-cases-shop-videos.creating-model-detail')}}</p>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/attachingBrandAndModelToCategory.mp4' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.attaching-brand-and-model')}}</h5>
                                             <p class="text-muted text-center">{{$t('phone-cases-shop-videos.attaching-brand-and-model-detail')}}</p>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/addingProduct.webm' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.adding-product')}}</h5>
                                             <p class="text-muted text-center">{{$t('phone-cases-shop-videos.adding-product-detail')}}</p>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/updatingProduct.webm' type="video/mp4">
                                             </video>
                                         </div>
                                         <div class="carousel-caption d-none d-md-block">
                                             <h5>{{$t('phone-cases-shop-videos.updating-product')}}</h5>
                                         </div>
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.updating-product')}}</h5>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/placingOrderPayPal.mp4' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.placing-order-paypal')}}</h5>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/placingOrderSTRIPE.mp4' type="video/mp4">
                                             </video>
                                         </div>     
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.placing-order-stripe')}}</h5>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/creatingAndEditingPolicies.mp4' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.managing-policies')}}</h5>
                                             <p class="text-muted text-center">{{$t('phone-cases-shop-videos.managing-policies-detail')}}</p>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/managingCarousel.mp4' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.managing-carousel')}}</h5>
                                         </div>
                                </div>
                                <div class="carousel-item">
                                         <div class="embed-responsive embed-responsive-16by9">
                                             <video class="embed-responsive-item" controls>
                                                 <source src='../../assets/projectsVideos/PhoneCasesShop/protectingRoutes.mp4' type="video/mp4">
                                             </video>
                                         </div>
                                         <div>
                                             <h5 class="text-muted text-center">{{$t('phone-cases-shop-videos.protecting-routes')}}</h5>
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
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3><span>{{$t('database-design')}}</span></h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h3><span>{{$t('source-code')}}</span></h3>
                        <button class="btn btn-secondary btn-block"><i class="fab fa-github"></i>&nbsp;GitHub</button>
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

export default {
  
}
</script>
<style scoped>
.carousel-control-prev{

  height:0;
  top:50%;
}

.carousel-control-next{
 
 height:0;
  top:50%;
}
.carousel-inner > .item > img, .carousel-inner > .item > a > img { width: 90%;}



</style>