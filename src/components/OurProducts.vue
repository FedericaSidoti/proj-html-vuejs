<script>
import ProductCard from './ProductCard.vue';
import GameCard from './GameCard.vue';
import {store} from '../store';
export default {
    components: {
        ProductCard,
        GameCard,
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
                <ul class="list-border">
                    <li class="item-border">Featured</li>
                    <li class="item-border">New Arrivals</li>
                    <li class="item-border">Best Sellers</li>
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
            <div class="col-6 p-rel"
            v-for="game in store.gamesInDiscount">
                <GameCard
                :game = game
                />
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as * ; 


.p-rel {
    position: relative;
}

</style>