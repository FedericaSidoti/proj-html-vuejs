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
        <div class="row">
            <div class="col-6"></div>
            <div class="col-6"></div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as * ; 


.list {
    display: flex;  
    margin-bottom: 25px;
    li {
        font-size: 12px; 
        font-weight: 500; 
        border: 1px solid $darkgray; 
        padding: 10px 20px; 
    }
}

</style>