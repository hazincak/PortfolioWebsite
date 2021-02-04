<template>
   
        <footer class="footer">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                    <span @click="setLanguage('en')">English</span>&nbsp;|&nbsp;<span @click="setLanguage('sk')">Slovensky</span>
                    <p>{{$t('my-name')}} {{$t('portfolio')}}</p>
                </div>
            </div>
        
            
        </footer>
   
</template>
<script>
export default {
  data () {
    return { 
        
    }
  },

  methods:{
      setLanguage(locale){
          this.$i18n.locale = locale;
          this.storeLocale(locale);
      },
      storeLocale(locale){
          localStorage.setItem('locale', locale);
      }
  }
}
</script>