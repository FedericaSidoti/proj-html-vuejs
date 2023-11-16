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
    <div class="section">
        <div class="row center">
            <h2 class="section-title">Special Category</h2>
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

</template>

<style lang='scss' scoped>
@use '../styles/partials/variables.scss' as * ; 

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