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
        // calcola il prezzo scontato 
        discountedPrice : function() {
            const discount = (this.product.price * this.product.discount) / 100 ; 
            const discounted = this.product.price - discount
            return discounted
        }
    }
} 
</script>

<template>
    <figure class="figure products-wrap">
    <!-- immagine -->
        <img :src="'/img/' + product.src ">
    <!-- info della card -->
    <div class="wrap">
        <!-- voto in stelle -->
            <span class="yllw-text" v-for="star in product.vote">&#10030;</span>
            <span v-for="star in (5-product.vote)">&#10030;</span>
        <!-- titolo prodotto -->
        <p>{{ product.title }}</p>
        <!-- prezzo ed eventuale prezzo scontato -->
        <div>
            <span class="yllw-text" :class="product.discount !== 0? 'old-price' : ''"> ${{ product.price }} </span>
            <span v-if="product.discount !== 0" class="price"> ${{ discountedPrice }}</span>
        </div>
    </div>
    <!-- badge eventuale sconto in absolute -->
        <div v-if="product.discount !== 0" class="badge">
            <p class=" badge-text"> - {{ product.discount }} %</p>
        </div>
    <!-- menu che compare on hover -->
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

// elementi esterni
.figure {
    position: relative;
    height: 100%;  

    &:hover .actions {
        display: flex; 
    }
}
.wrap {
    padding: 5px; 
}
.products-wrap {
    background-color: #170e1f;
}

//decorazioni e adattamento badges

.badge-text {
    font-size: 12px; 
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

//menu in hover 
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

</style>