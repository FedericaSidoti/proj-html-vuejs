<script>

export default {
    components: {
    },
    data() {
        return { 
        }
    },
    props: {
        category : Object,
    }
} 
</script>

<template>
    <figure class="category">
        <img :src=" '/img/' + category.img ">
        <div class="category-info">
            <p class="category-title">{{ category.name }}</p>
            <a> Shop Now</a>
        </div>
        <p class="tag">{{ category.name }}</p>
    </figure>
</template>

<style lang="scss" scoped>

.category{
    position: relative; 
    &:hover .category-info{
        background-color: rgba(0, 0, 0, 1);
    }

    &:hover .tag {
        display: inline-block; 
    }
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

.tag {
    background-color: white;
    color: black;
    padding: 5px; 
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    display: none; 
}

</style>