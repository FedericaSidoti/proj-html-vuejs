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
            <h2>Our Products</h2>
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

<style scoped>

</style>