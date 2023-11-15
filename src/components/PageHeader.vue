<script>
import {store} from '../store'

export default {
    components: {
    },
    data() {
        return { 
            store: store,
        }
    }
} 
</script>

<template>
    <div class="container">
        <img src="/img/logo.png">
        <ul class="nav">
            <li v-for="item in store.navItems"> 
                <p>{{ item }}</p>
            </li>
        </ul>
        <ul class="nav">
            <li>
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </li>
            <li>
                <font-awesome-icon :icon="['fas', 'user']" />
            </li>
            <li>
                <font-awesome-icon :icon="['fas', 'bag-shopping']" />
                <span class="yellow-colour"> 0 £0.00</span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;

.container {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    color: $white; 
}

.nav {
    display: flex;
    gap: 30px; 
}

.yellow-colour{
    color : $yellow; 
}
</style>