<template>
    <div>
        <h1>Phone Cases Shop</h1>
        <div class="row">
            <div class="col-md-12 text-center">
                <img alt="project-thumbnail" style="width:" class=" rounded"  src="../../assets/PhoneCasesShop.jpg">
                <hr>
                <h4><span>{{$t('used-technologies')}}</span></h4>
                <div class="col-6 text-left">
                    <p><b>Frontend:</b>&nbsp;HTML5,&nbsp;CSS3,&nbsp;Sass,&nbsp;VueJS&nbsp;(Javascript)</p>
                    <p><b>Backend:</b>&nbsp;Laravel&nbsp;(PHP)</p>
                    <p><b>{{$t('database')}}:</b>&nbsp;MySQL&nbsp;(SQL)</p> 
                    <p><b>{{$t('payment-gateways')}}:</b>&nbsp;PayPal,&nbsp;Stripe</p> 
                </div>
                <p></p>
                <h4><span>{{$t('project-demo')}}</span></h4>
                <video width="320" height="240" controls>
                    <source src="../../assets/projectsVideos/PhoneCasesShop/Adding model.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</template>