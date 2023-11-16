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
        <div class="row arrows">
            <div class="col-4"
            v-for="blog in store.blogs">
                <CardBlog
                :blog = blog 
                />
                <div class="hover-wrap">
                    <span class="icon-wrap">
                        <font-awesome-icon :icon="['fas', 'plus']" />
                    </span>
                    <span class="icon-wrap">
                        <font-awesome-icon :icon="['fas', 'link']" />
                    </span>
                </div>
            </div>
            <div class="arrow next">
                <img src="/img/next.png">
            </div>
            <div class="arrow prew">
                <img src="/img/previous.png">
            </div>
        </div>
        <div class="row partners">
            <div v-for="partner in store.partners">
                <img class="logo" :src=" '/img/' + partner ">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.center {
    padding: 20px 0; 
}

.col-4 {
    border-bottom: 1px solid gray; 
    padding: 15px; 
    position: relative;

    &:hover .hover-wrap {
        display: flex ; 
    }
}

.hover-wrap {
    position: absolute;
    display: none; 
    gap: 10px; 
    top: 100px; 
    left: 50%; 
    transform: translate(-50%);

    .icon-wrap {
        padding: 10px 12px; 
        border-radius: 50%; 
        border: 2px solid white; 
        color: white; 
    }
}

.logo {
    width: 110px; 
}
.partners {
    justify-content: space-between; 
    padding: 40px 0 0 0 ; 
}
.arrows {
    position: relative; 
    &:hover .arrow{
        display: inline-block; 
    }

    .arrow {
        display: none; 
        position: absolute; 
        top: 100px; 
        opacity: 0.8; 
    }

    .next {
        right: -10px; 
    }

    .prew {
        left: -10px; 
    }
}
</style>