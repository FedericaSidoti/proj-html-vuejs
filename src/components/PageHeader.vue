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
            <li v-for="item in store.navItems" class="list-item"> 
                <p class="nav-item">{{ item }}</p>
                <ul class="nav-menu">
                    <li>Left Sidebar</li>
                    <li>Right Sidebar</li>
                    <li>Full Width</li>
                </ul>
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

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.container {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px; 
}

.list-item {
    position: relative; 

    &:hover .nav-menu {
        display: flex; 
    }
}

.nav {
    display: flex;
    gap: 30px; 

    .nav-item:hover{
        color: $yellow; 
    }
}

.nav-menu {
    color: gray;
    background-color: #1D1427; 
    border: 1px solid $darkgray; 
    position: absolute; 
    flex-direction: column;
    gap: 10px; 
    font-size: 12px; 
    padding: 10px; 
    top: 40px; 
    left: -10px; 
    width: 150px;  
    display: none;  
}

.yellow-colour{
    color : $yellow; 
}
</style>