<script>

export default {
    components: {
    },
    props: {
        game : Object,
    },
    data() {
        return { 
        }
    }
} 
</script>

<template>
    <img src="/img/cms-banner-01.jpg">
        <div class="info">
            <div class="badge">
                <p class="badge-text">{{ game.tag }}</p>
            </div>
            <div class="info-text" >{{ game.title }}</div>
        </div>
</template>

<style lang="scss" scoped >
@use '../styles/partials/variables.scss' as *;

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