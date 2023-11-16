<script>
import ProductCard from './ProductCard.vue';
import {store} from '../store';
export default {
    components: {
        ProductCard,
    },
    data() {
        return { 
            store: store,
        }
    }
} 
</script>

<template>
    <div class="section">
        <div class="row center">
            <div class='section-info'>
                <h2 class="section-title">Our Products</h2>
                <ul class="list">
                    <li>Featured</li>
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                </ul>
            </div>
            
        </div>
        <div class="row">
            <div class="col-3"
            v-for="product in store.products">
                <ProductCard
                :product = product
                />
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as * ; 


.list {
    display: flex; 

    li {
        border: 1px solid gray; 
    }
}

</style>