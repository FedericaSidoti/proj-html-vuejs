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
        nextButton (item){
            this.currentIndex ++; 
            this.currentRow = item

            if (this.currentIndex === this.store.menuProducts.length) {
                this.currentIndex = 0
            }
        }, 
        prewButton(item) {
            this.currentIndex --; 
            this.currentRow = item

            if (this.currentIndex === -1) {
                this.currentIndex = this.store.menuProducts.length -1
            }
        },
    },
    computed : {
        arrayActive : function(){
            this.currentArray = this.store.products[this.currentIndex]
            return this.currentArray
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
                    :class="index === currentIndex? 'yllw-text' : ''">
                    {{ item }}</li>
                </ul>
            </div>
            
        </div>
        <div class="row" v-for="item, index in store.menuProducts"
        :class="index === currentIndex? 'active' : 'd-none'">
            <div class="col-3 "
            v-for="product, index in arrayActive">
                <ProductCard
                :product = product
                />
            </div>
            <div class="next" @click="nextButton(item)">
                <img src="/img/next.png">
            </div>
            <div class="prew" @click="prewButton(item)">
                <img src="/img/previous.png">
            </div>
        </div>
        <div class="row">
            <div class="col-6"
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

.row {
    position: relative; 
    opacity: 1; 
}

.col-3 {
    margin-bottom: 50px; 
}

.col-6 {
    position: relative;
}


</style>