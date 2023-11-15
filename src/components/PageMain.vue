<script>
import PageHero from './PageHero.vue';
import Overview from './Overview.vue';
import SpecialCategory from './SpecialCategory.vue'
export default {
    components: {
        PageHero,
        Overview,
        SpecialCategory,
    },
    data() {
        return {  
        }
    }
} 
</script>

<template>
    <PageHero/>
    <Overview/>
    <SpecialCategory/>
</template>

<style lang="scss">


</style>
