<script>
import TeamCard from '../components/TeamCard.vue';
import {store} from '../store'; 
export default {
    components: {
        TeamCard
    },
    data() {
        return { 
            store: store,
            currentIndex : 0,
            currentDot : 0,
        }
    },
    methods : {
        changeCard(i) {
            this.currentIndex = i ; 
            this.currentIndex++;
            this.currentDot ++ ; 

            if(this.currentIndex=== this.store.members.length) {
                this.currentIndex = 0 ; 
                this.currentDot = 0; 
            }
        }
    }
} 
</script>

<template>
    <div class='container-fluid'>
        <div class="section">
            <div class="container">
                    <TeamCard
                    v-for="member, index in store.members"
                    :class="index === currentIndex? 'active': 'b-card'"
                    @click="changeCard(index)"
                    :member = member
                    />
                <div class="index">
                    <span class="wrap-icon"
                    v-for="item, index in store.members"
                    :class="index===currentDot? 'active-text' : ''">
                        <font-awesome-icon :icon="['fas', 'circle']" />
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as * ;
.container-fluid {
    max-width: 100%;
    margin: 0 auto; 
    background-image: url(/img/parallax.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;  
}

.active-text {
    color: $yellow;  
}

.container {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    text-align: center;
    padding: 80px 0; 
}

.card-team {
    margin-bottom: 60px; 
}
.b-card {
    display: none; 
    z-index: -1 
}

.active {
    display: flex; 
}

.index {
    font-size: 10px; 
    display: flex; 
    gap: 10px; 
    position: absolute;
    bottom: 20px;  
}


</style>