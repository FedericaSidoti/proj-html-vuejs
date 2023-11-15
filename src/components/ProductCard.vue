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
        <div>
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
    </figure>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *; 

.stars {
    color: $yellow; 
}

.figure {
    position: relative; 
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