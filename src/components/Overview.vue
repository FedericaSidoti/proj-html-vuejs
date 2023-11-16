<script>
import GameCard from './GameCard.vue';
import {store} from '../store';
export default {
    components: {
        GameCard,
    },
    data() {
        return { 
            store:store,
        }
    }
} 
</script>

<template>
    <section class="section">
            <ul class="list">
                <li class="list-item">
                    <font-awesome-icon class="big-icon" :icon="['fas', 'truck']" />
                    <div>
                        <p>Free Delivery</p>
                        <p class="light-text">Free shipping on all orders</p>
                    </div>
                </li>
                <li class="list-item">
                    <font-awesome-icon class="big-icon" :icon="['fas', 'sack-dollar']" />
                    <div>
                        <p>Money Return</p>
                        <p class="light-text">Back Guarantee in 7 days</p>
                    </div>
                </li>
                <li class="list-item">
                    <font-awesome-icon class="circle" :icon="['fas', 'percent']" />
                    <div>
                        <p>Member Discount</p>
                        <p class="light-text">On every order over $130</p>
                    </div>
                </li>
                <li class="list-item">
                    <font-awesome-icon class="big-icon" :icon="['fas', 'hand-holding-dollar']" />
                    <div>
                        <p>Return Policy</p>
                        <p class="light-text">Support 24 hours a day</p>
                    </div>
                </li>
            </ul>
            <div class="row">
                <div class="col-6"
                v-for="game in store.gamesInEvidence">
                    <GameCard
                    :game="game"/>
                </div>
            </div>
    </section>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;


.col-6 {
    position: relative; 
}
.list {
    display: flex;
    justify-content: space-between;
    font-size: 13px; 
    padding: 20px; 
    margin-bottom: 15px; 
}

.big-icon {
    font-size: 30px; 
    margin-right: 10px; 
}

.circle {
    background-color: $white;
    border-radius: 30px; 
    padding: 6px 9px; 
    font-size: 18px; 
    margin-right: 10px; 
    color: black; 
}

.list-item {
    display: flex; 
    align-items: center; 
    padding: 0px 15px; 

    &:not(:last-child)::after {
        content: ''; 
        height: 25px; 
        width: 1px; 
        background-color: $darkgray;
        margin-left: 20px; 
    }
}

.info {
    position: absolute; 
    top: 60px; 
    right: 30px;  
    max-width: 200px; 
    font-size: 20px; 
    display: flex; 
    flex-direction: column;
    gap: 10px; 
    align-items: flex-start; 
}


.info-text {
    font-weight: 800; 
}
</style>