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
            currentArray: [],
            currentIndex: 0,
            currentRow: null, 
        }
    },
    methods : {
        nextButton (item){
            this.currentIndex ++; 
            this.currentRow = item; 

            if (this.currentIndex === this.store.menuDeals.length) {
                this.currentIndex = 0
            }
        }, 
        prewButton(item) {
            this.currentIndex --; 
            this.currentRow = item;

            if (this.currentIndex === -1) {
                this.currentIndex = this.store.menuDeals.length -1
            }
        },
    },
    computed : {
        arrayActive : function(){
            this.currentArray = this.store.deals[this.currentIndex]
            return this.currentArray
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
                    <li class="item-border"  
                    v-for="item, index in store.menuDeals"
                    :key="index"
                    :class="index === currentIndex? 'active-text' : ''">
                    {{ item }}</li>
                </ul>
            </div>
        </div>
            <div class="row slider"
            v-for="item, index in store.menuDeals"
            :class="index === currentIndex? 'active' : ''"
            :key="index">
                <div class="col-3"
                v-for="deal, index in arrayActive"
                :key="index">
                    <ProductCard
                    :product = deal
                    />
                </div>
                <div class="next" @click="nextButton(item)">
                    <img class="arrow-btn" src="/img/next.png">
                </div>
                <div class="prew" @click="prewButton(item)">
                    <img src="/img/previous.png">
                </div>
            </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as * ; 

.section {
    position: relative; 
}

.list-border {
    padding-bottom: 10px;
}
.slider {
    position: relative; 
    opacity: 0; 
    display : none;  
}

.slider.active {
    opacity: 1;  
    display: flex;
}

.next {
    position: absolute; 
    top: 110px; 
    right: -20px;   
    cursor: pointer; 
}


.prew {
    position: absolute; 
    top: 110px; 
    left: -20px; 
    cursor: pointer;
}

.active-text {
    color : $yellow; 
}

</style>