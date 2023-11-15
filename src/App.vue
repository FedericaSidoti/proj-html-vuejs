<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
export default {
  components: {
    PageHeader,
    PageMain,
  },
  data() {
    return {  
    }
  }
} 
</script>

<template>
  <PageHeader/>
  <PageMain/>
</template>

<style lang="scss">
@use './styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;500;700&display=swap');


</style>
