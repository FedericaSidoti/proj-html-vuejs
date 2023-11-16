<script>
export default {
    components: {
    },
    data() {
        return {  
        }
    },
    props: {
        blog: Object
    }
} 
</script>

<template>
    <figure class="figure">
        <img :src="'/img/' + blog.src">
        <div class="blog-info">
            <span class="date">
                <font-awesome-icon class="icon" :icon="['fas', 'calendar-days']" />
                {{ blog.date }}
            </span>
            <span class="comment">
                <font-awesome-icon class="icon" :icon="['fas', 'comments']" />
                {{ blog.comments }} comments
            </span>
        </div>
        <p class="text">{{ blog.name }}</p>
    </figure>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *; 

.figure {
    display: flex; 
    flex-direction: column;
    gap: 10px; 
    margin-bottom: 25px; 
}
.date {
    margin-right: 15px; 
}

.blog-info {
    font-size : 13px; 
    color: gray; 
}

.text {
    font-weight: 500;
    font-size: 13px; 
}

.icon {
    color: $yellow; 
}
</style>