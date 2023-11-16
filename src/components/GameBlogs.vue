<script>
import CardBlog from '../components/CardBlog.vue';
import {store} from '../store';
export default {
    components: {
        CardBlog,
    },
    data() {
        return {  
            store : store,
        }
    },
    props: {
    }
} 
</script>

<template>
    <div class="section">
        <div class="row center">
            <h2 class="section-title">New Game Blog</h2>
        </div>
        <div class="row">
            <div class="col-4"
            v-for="blog in store.blogs">
                <CardBlog
                :blog = blog 
                />
            </div>
        </div>
        <div class="row partners">
        </div>
    </div>
</template>

<style scoped>

.col-4 {
    border-bottom: 1px solid gray; 
    padding: 20px 0; 
}

.partners {
    justify-content: space-between; 
}
</style>