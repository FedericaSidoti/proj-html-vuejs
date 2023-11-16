<script>
import PageHero from './PageHero.vue';
import Overview from './Overview.vue';
import SpecialCategory from './SpecialCategory.vue';
import OurProducts from './OurProducts.vue';
import Deals from './Deals.vue';
import Team from './Team.vue';
export default {
    components: {
        PageHero,
        Overview,
        SpecialCategory,
        OurProducts,
        Deals,
        Team,
    },
    data() {
        return {  
        }
    }
} 
</script>

<template>
    <PageHero/>
    <div class="container">
        <Overview/>
        <SpecialCategory/>
        <OurProducts/>
        <Deals/>
    </div>
    <Team/>
    
</template>

<style lang="scss">


</style>
