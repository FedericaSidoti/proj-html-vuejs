<script>
import ProductCard from './ProductCard.vue';
import {store} from '../store'
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
        <div class=" row center">
            <div class="section-info">
                <h2 class="section-title">Deal of the Day</h2>
                <ul class="list-border">
                    <li class="item-border">1025 days</li>
                    <li class="item-border">13 hours</li>
                    <li class="item-border">24 mins</li>
                    <li class="item-border">17 secs</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-3"
            v-for="deal in store.deals">
                <ProductCard
                :product = deal
                />
            </div>
        </div>
    </div>

</template>

<style>

</style>