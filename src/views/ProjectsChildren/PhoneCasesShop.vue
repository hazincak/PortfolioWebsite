<template>
    <div>
        <h1>Phone Cases Shop</h1>
        <div class="row">
            <div class="col-md-12 text-center">
                <img alt=" img-fluid" style="width:" class=" rounded"  src="../../assets/PhoneCasesShop.jpg">
                <hr>
                <h4><span>{{$t('used-technologies')}}</span></h4>
                <div class="col-6 text-left">
                    <p><b>Frontend:</b>&nbsp;HTML5,&nbsp;CSS3,&nbsp;Sass,&nbsp;VueJS&nbsp;(Javascript)</p>
                    <p><b>Backend:</b>&nbsp;Laravel&nbsp;(PHP)</p>
                    <p><b>{{$t('database')}}:</b>&nbsp;MySQL&nbsp;(SQL)</p> 
                    <p><b>{{$t('payment-gateways')}}:</b>&nbsp;PayPal,&nbsp;Stripe</p> 
                </div>
                <h4><span>{{$t('project-demo')}}</span></h4>
                <div id="carouselExampleControls" class="carousel slide" data-touch="true" data-ride="carousel">
                 <div class="carousel-inner">
                        <div class="carousel-item active">
                                 <div class="embed-responsive embed-responsive-16by9">
                                     <video class="embed-responsive-item" controls>
                                         <source src='../../assets/projectsVideos/PhoneCasesShop/CategoryCRUD.webm' type="video/mp4">
                                     </video>
                                 </div>
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5>{{$t('phone-cases-shop-videos.categoryCRUD')}}</h5>
                                 </div>
                                 <div>
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.categoryCRUD')}}</p>
                                 </div>
                        </div>
                        <div class="carousel-item">
                                 <div class="embed-responsive embed-responsive-16by9">
                                     <video class="embed-responsive-item" controls>
                                         <source src='../../assets/projectsVideos/PhoneCasesShop/addingModel.mp4' type="video/mp4">
                                     </video>
                                 </div>
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5>{{$t('phone-cases-shop-videos.creating-model')}}</h5>
                                 </div>
                                 <div>
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.creating-model')}}</p>
                                 </div>
                        </div>
                        <div class="carousel-item">
                                 <div class="embed-responsive embed-responsive-16by9">
                                     <video class="embed-responsive-item" controls>
                                         <source src='../../assets/projectsVideos/PhoneCasesShop/attachingBrandAndModelToCategory.mp4' type="video/mp4">
                                     </video>
                                 </div>
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5>{{$t('phone-cases-shop-videos.attaching-brand-and-model')}}</h5>
                                 </div>
                                 <div>
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.attaching-brand-and-model')}}</p>
                                 </div>
                        </div>
                        <div class="carousel-item">
                                 <div class="embed-responsive embed-responsive-16by9">
                                     <video class="embed-responsive-item" controls>
                                         <source src='../../assets/projectsVideos/PhoneCasesShop/addingProduct.webm' type="video/mp4">
                                     </video>
                                 </div>
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5>{{$t('phone-cases-shop-videos.adding-product')}}</h5>
                                 </div>
                                 <div>
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.adding-product')}}</p>
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
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.updating-product')}}</p>
                                 </div>
                        </div>
                        <div class="carousel-item">
                                 <div class="embed-responsive embed-responsive-16by9">
                                     <video class="embed-responsive-item" controls>
                                         <source src='../../assets/projectsVideos/PhoneCasesShop/placingOrderPayPal.mp4' type="video/mp4">
                                     </video>
                                 </div>
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5>{{$t('phone-cases-shop-videos.placing-order-paypal')}}</h5>
                                 </div>
                                 <div>
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.placing-order-paypal')}}</p>
                                 </div>
                        </div>
                        <div class="carousel-item">
                                 <div class="embed-responsive embed-responsive-16by9">
                                     <video class="embed-responsive-item" controls>
                                         <source src='../../assets/projectsVideos/PhoneCasesShop/placingOrderSTRIPE.mp4' type="video/mp4">
                                     </video>
                                 </div>
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5>{{$t('phone-cases-shop-videos.placing-order-stripe')}}</h5>
                                 </div>
                                 <div>
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.placing-order-stripe')}}</p>
                                 </div>
                        </div>
                        <div class="carousel-item">
                                 <div class="embed-responsive embed-responsive-16by9">
                                     <video class="embed-responsive-item" controls>
                                         <source src='../../assets/projectsVideos/PhoneCasesShop/creatingAndEditingPolicies.mp4' type="video/mp4">
                                     </video>
                                 </div>
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5>{{$t('phone-cases-shop-videos.managing-policies')}}</h5>
                                 </div>
                                 <div>
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.managing-policies')}}</p>
                                 </div>
                        </div>
                        <div class="carousel-item">
                                 <div class="embed-responsive embed-responsive-16by9">
                                     <video class="embed-responsive-item" controls>
                                         <source src='../../assets/projectsVideos/PhoneCasesShop/managingCarousel.mp4' type="video/mp4">
                                     </video>
                                 </div>
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5>{{$t('phone-cases-shop-videos.managing-carousel')}}</h5>
                                 </div>
                                 <div>
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.managing-carousel')}}</p>
                                 </div>
                        </div>
                        <div class="carousel-item">
                                 <div class="embed-responsive embed-responsive-16by9">
                                     <video class="embed-responsive-item" controls>
                                         <source src='../../assets/projectsVideos/PhoneCasesShop/protectingRoutes.mp4' type="video/mp4">
                                     </video>
                                 </div>
                                 <div class="carousel-caption d-none d-md-block">
                                     <h5>{{$t('phone-cases-shop-videos.protecting-routes')}}</h5>
                                 </div>
                                 <div>
                                     <p class="text-muted d-md-none">{{$t('phone-cases-shop-videos.protecting-routes')}}</p>
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
            <!-- column -->
        </div>
        <!-- row -->
    </div>
</template>
<script>

export default {
  
}
</script>
<style scoped>
.carousel-control-prev. .carousel-control-next{
  height:0;
  top:50%;
}
.carousel-control-next{
    height:0;
  top:50%;
}
.carousel-inner > .item > img, .carousel-inner > .item > a > img { width: 90%;}
</style>