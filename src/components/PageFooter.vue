<script>
import {store} from '../store' ; 
export default {
    components: {
    },
    data() {
        return {  
            store: store,
        }
    },
} 
</script>

<template>
    <div class="container-fluid">
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <h3 class="footer-title">Address Info</h3>
                        <ul class="list-footer gray-text">
                            <li>
                                <font-awesome-icon class="icon" :icon="['fas', 'location-dot']" />
                                <p>60 29th Street San Francisco, CA 94 110 507 Union Trade Service, United States of America</p>
                            </li>
                            <li>
                                <font-awesome-icon class="icon" :icon="['fas', 'phone']" />
                                <p>(+00) 123-456-789</p>
                            </li>
                            <li>
                                <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                                <p>demo@example.com</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h3 class="footer-title">Informations</h3>
                        <ul class="list-footer gray-text">
                            <li v-for="info in store.informations">
                                {{ info }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h3 class="footer-title">Extras</h3>
                        <ul class="list-footer gray-text">
                            <li v-for="extra in store.extras">
                                {{ extra }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h3 class="footer-title">Our Newsletter</h3>
                        <p class="gray-text info"> There are many variations of passages of forms humour or randomized </p>
                        <div class="input-wrap">
                            <input class="input" type='text'>
                            <button class="button">
                                <font-awesome-icon :icon="['fas', 'paper-plane']" />
                            </button>
                        </div>
                        <div class="social">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                            <font-awesome-icon :icon="['fab', 'google-plus-g']" />
                            <font-awesome-icon :icon="['fab', 'skype']" />
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@use '../styles/partials/variables.scss' as *; 
.container-fluid {
    background-image: url(/img/footer-bg.png);
}

.footer-title {
    font-weight: 500; 
    margin-bottom: 20px; 
}
.list-footer {
    display: flex; 
    flex-direction: column;
    gap: 10px; 

    li {
        display: flex; 
        gap: 15px; 
        align-items : flex-start; 
        margin-right: 15px; 
    }
}

.gray-text {
    color: gray; 
    font-size: 12px; 
}
.icon {
    margin-top: 2px; 
    color : $yellow; 
}

.social {
    display: flex; 
    gap: 20px; 
}

.input-wrap {
    display: flex;  
    margin-bottom: 20px; 
    .input {
        border: none; 
    }
}

.info {
    margin-bottom : 15px; 
}

.button {
    padding: 5px; 
    border: none; 
    background-color: white;
    color: black; 
    cursor: pointer; 
}


</style>