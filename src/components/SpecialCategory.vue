<script>
import CategoryCard from './CategoryCard.vue';
import { store } from '../store';
export default {
    components: {
        CategoryCard,
    },
    data() {
        return { 
            store : store,
        }
    }
} 
</script>

<template>
    <div class="section">
        <div class="row center">
            <h2 class="section-title">Special Category</h2>
        </div>
        <div class="row">
            <div class="col-4" v-for="category in store.categories">
                <CategoryCard
                :category = category
                />
            </div>
        </div>
    </div>

</template>

<style lang='scss' scoped>
@use '../styles/partials/variables.scss' as * ; 


</style>