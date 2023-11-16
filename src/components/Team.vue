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
        }
    },
    methods : {
        changeCard(i) {
            this.currentIndex = i ; 
            this.currentIndex++;

            if(this.currentIndex=== this.store.members.length) {
                this.currentIndex = 0 ; 
            }
        }
    }
} 
</script>

<template>
    <div class='container-fluid'>
        <div class="section">
            <div class="container">
                <div class="card-wrap">
                    <TeamCard
                    v-for="member, index in store.members"
                    :class="index === currentIndex? 'active': 'b-card'"
                    @click="changeCard(index)"
                    :member = member
                    />
                </div>
                <div class="index">
                    <font-awesome-icon :icon="['fas', 'circle']" />
                    <font-awesome-icon :icon="['fas', 'circle']" />
                    <font-awesome-icon :icon="['fas', 'circle']" />
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.container-fluid {
    max-width: 100%;
    margin: 0 auto; 
    background-image: url(/img/parallax.jpg);
}

.container {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    text-align: center; 
    position: relative; 
    padding: 100px 0; 
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
}


</style>