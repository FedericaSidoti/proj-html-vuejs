<script>

export default {
    components: {
    },
    data() {
        return { 
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
                <div class="col-6">
                    <img src="/img/cms-banner-01.jpg">
                    <div class="info">
                        <div class="badge">
                            <p class="badge-text">Most Popular</p>
                        </div>
                        <div class="info-text" >The Battlefield 4 Naval Strike</div>
                    </div>
                </div>
                <div class="col-6">
                    <img src="/img/cms-banner-02.jpg">
                    <div class="info">
                        <div class="badge">
                            <p class='badge-text'>Latest Game</p>
                        </div>
                        <div class="info-text">Assassin's Creed Unity Game</div>
                    </div>
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