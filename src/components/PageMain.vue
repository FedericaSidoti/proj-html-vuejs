<script>
import PageHero from './PageHero.vue';
import Overview from './Overview.vue';
import SpecialCategory from './SpecialCategory.vue';
import OurProducts from './OurProducts.vue';
import Deals from './Deals.vue';
import Team from './Team.vue';
import GameBlogs from './GameBlogs.vue';
export default {
    components: {
        PageHero,
        Overview,
        SpecialCategory,
        OurProducts,
        Deals,
        Team,
        GameBlogs,
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
    <div class="container">
        <GameBlogs/>
    </div>
</template>

<style lang="scss">


</style>
