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
    <div class="hero section">
        <div class="hero-info">
            <div class="badge">
                <p class="badge-text">Upcoming Stock</p>
            </div>
            <h1>Resident Evil 3 Remake</h1>
            <button class="btn">Shop Now</button>
        </div>
    </div>

</template>

<style lang='scss' scoped>
@use '../styles/partials/variables.scss' as *;
.hero {
    background-image: url(/img/image.png);
    padding: 150px; 
}

.hero-info { 
    display: flex; 
    max-width: 500px; 
    flex-direction: column;
    align-items: flex-start; 
    gap: 35px; 
}

.badge {
    margin-left: 20px; 
}

.badge-text {
    font-size: 25px; 
}

h1 {
    font-size: 50px; 
    font-weight: 700; 
    margin-bottom: 50px; 
}

.btn{
    padding: 4px 6px; 
}

</style>