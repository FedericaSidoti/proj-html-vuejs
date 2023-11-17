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
            currentArray: [],
            currentIndex: 0,
        }
    },
    methods : {
        nextButton (){
            this.currentIndex ++; 

            if (this.currentIndex === this.store.menuProducts.length) {
                this.currentIndex = 0
            }
        }, 
        prewButton() {
            this.currentIndex --; 

            if (this.currentIndex === -1) {
                this.currentIndex = this.store.menuProducts.length -1
            }
        },
    },
    computed : {
        arrayActive : function(){
            if (this.currentIndex === 0) {
                this.currentArray = this.store.products.featured
                return this.currentArray
            } else if (this.currentIndex === 1) {
                this.currentArray = this.store.products.newArrivals
                return this.currentArray
            } else {
                this.currentArray = this.store.products.bestSellers
                return this.currentArray
            }
            
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
                    <li class="item-border"  
                    v-for="item, index in store.menuProducts"
                    :class="index === currentIndex? 'active-text' : ''">
                    {{ item }}</li>
                </ul>
            </div>
            
        </div>
        <div class="row" v-for="item, index in store.menuProducts"
        :class="index === currentIndex? 'active' : 'd-none'">
            <div class="col-3"
            v-for="product, index in arrayActive">
                <ProductCard
                :product = product
                />
            </div>
            <div class="next" @click="nextButton()">
                <img src="/img/next.png">
            </div>
            <div class="prew" @click="prewButton()">
                <img src="/img/previous.png">
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

.row {
    position: relative; 
    opacity: 1; 
    transition: all 2s ease;  
}

.active-text {
    color: $yellow; 
}

.row.d-none {
    display: none; 
    opacity: 0; 
    z-index: -1; 
}

.row.active {
    display: flex; 
    opacity: 1; 
}

.next {
    position: absolute; 
    top: 100px; 
    right: -20px; 
    cursor: pointer; 
}

.prew {
    position: absolute; 
    top: 100px; 
    left: -20px; 
    cursor: pointer;
}

</style>