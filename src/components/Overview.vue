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
        <div class="container">
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
                </div>
                <div class="col-6">
                    <img src="/img/cms-banner-02.jpg">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;

.row {
    padding: 25px 0; 
}
.list {
    display: flex;
    justify-content: space-between;
    font-size: 13px; 
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
        height: 20px; 
        width: 1px; 
        background-color: gray;
        margin-left: 20px; 
    }
}

</style>