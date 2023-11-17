<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {  
    }
  },
  
} 
</script>

<template>
  <PageHeader/>
  <PageMain/>
  <PageFooter/>
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/reset.scss';
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;500;700&display=swap');


</style>
