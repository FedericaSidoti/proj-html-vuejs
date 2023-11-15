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
    <div class="container">
        <div class="section">
            <div class="row center">
                <h2>Special Category</h2>
            </div>
            <div class="row">
                <div class="col-4">
                    <figure class="category">
                        <img src="/img/category-image-01-446x550_t.jpg">
                        <div class="category-info">
                            <p class="category-title">Batman</p>
                            <a> Shop Now</a>
                        </div>
                    </figure>
                </div>
                <div class="col-4">
                    <figure class="category">
                        <img src="/img/category-image-02-446x550_t.jpg">
                        <div class="category-info">
                            <p class="category-title">Bayonetta</p>
                            <a> Shop Now</a>
                        </div>
                    </figure>
                </div>
                <div class="col-4">
                    <figure class="category">
                        <img src="/img/category-image-03-446x550_t.jpg">
                        <div class="category-info">
                            <p class="category-title">Dark Souls</p>
                            <a>Shop Now</a>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang='scss' scoped>
@use '../styles/partials/variables.scss' as * ; 

.center {
    align-items: center; 
    justify-content: center; 
}

h2 {
    margin-bottom: 20px; 
    position: relative;
    &::after {
        content: '';
        position: absolute; 
        width: 30px; 
        height: 2px; 
        background-color: $yellow;
        display: block; 
        top: 40px; 
        right: 50%; 
        transform: translate (50%); 
    }
}

.category{
    position: relative; 
}

.category-info {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute; 
    bottom: 0; 
    right: 0; 
    left: 0; 
    flex-direction: column; 
    gap: 10px;
    padding: 10px; 
}

</style>