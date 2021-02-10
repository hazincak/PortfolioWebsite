<template>
   
        <footer class="footer section_footer">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                    <span :class="{active: locale ==='en'}" class="pointer" @click="setLanguage('en')">English</span>&nbsp;|&nbsp;<span :class="{active: locale ==='sk'}" class="pointer" @click="setLanguage('sk')">Slovensky</span>
                    <p>{{$t('my-name')}} {{$t('portfolio')}}</p>
                </div>
            </div>
        
            
        </footer>
   
</template>
<script>
export default {
  data () {
    return { 
        locale: null,
    }
  },

  created() {
      this.locale = localStorage.getItem('locale');
  },

  methods:{
      setLanguage(locale){
          this.$i18n.locale = locale;
          this.locale = locale;
          this.storeLocale(locale);
      },
      storeLocale(locale){
          localStorage.setItem('locale', locale);
      }
  }
}
</script>