<script>
import PageHeader from './components/PageHeader.vue';
import PageHero from './components/PageHero.vue';
export default {
  components: {
    PageHeader,
    PageHero,
  },
  data() {
    return {  
    }
  }
} 
</script>

<template>
  <PageHeader/>
  <PageHero/>
</template>

<style lang="scss">
@use './styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;500;700&display=swap');


</style>
