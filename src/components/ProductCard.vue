<script>

export default {
    components: {
    },
    props: {
        product : Object
    },
    data() {
        return { 
        }
    }, 
    computed : {
        discountedPrice : function() {
            const discounted = (this.product.price * this.product.discount) / 100 ; 
            return discounted
        }
    }
} 
</script>

<template>
    <figure class="figure">
        <img :src="'/img/' + product.src ">
        <div class="wrap">
            <span class="stars" v-for="star in product.vote">&#10030;</span>
            <span v-for="star in (5-product.vote)">&#10030;</span>
            <p>{{ product.title }}</p>
            <div>
                <span class="price" :class="product.discount !== 0? 'old-price' : ''"> ${{ product.price }} </span>
                <span v-if="product.discount !== 0" class="price"> ${{ discountedPrice }}</span>
            </div>
            
        </div>
        <div v-if="product.discount !== 0" class="badge">
            <p class=" badge-text"> - {{ product.discount }} %</p>
        </div>
        <ul class="actions">
            <li class="action">
                <font-awesome-icon :icon="['fas', 'hand-point-up']" />
            </li>
            <li class="action">
                <font-awesome-icon :icon="['fas', 'heart']" />
            </li>
            <li class="action">
                <font-awesome-icon :icon="['fas', 'arrows-up-down-left-right']" />
            </li>
            <li class="action">
                <font-awesome-icon :icon="['fas', 'eye']" />
            </li>
        </ul>
    </figure>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *; 

.wrap {
    background-color: #170e1f;
}
.stars {
    color: $yellow; 
}

.actions {
    position: absolute; 
    bottom: -5px; 
    right: 0; 
    left: 0; 
    background-color: #170e1f; 
    display: none; 
}

.action {
    flex-basis : calc(100% / 4);
    text-align: center; 
    border: 1px solid $darkgray; 
    padding: 3px; 
}

.figure {
    position: relative; 

    &:hover .actions {
        display: flex; 
    }
}

.badge-text {
    font-size: 12px; 
}
.price{
    color: $yellow; 
}
.old-price {
    text-decoration: line-through;
    color: $white; 
}

.badge {
    position: absolute; 
    top: 10px; 
    left: 20px; 
}


</style>