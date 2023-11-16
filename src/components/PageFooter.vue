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
                    <div class="col-4">
                        <h3 class="footer-title">Address Info</h3>
                        <ul class="list-footer">
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
                    <div class="col-4">
                        <h3 class="footer-title">Informations</h3>
                        <ul class="list-footer">
                            <li v-for="info in store.informations">
                                {{ info }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <h3 class="footer-title">Extras</h3>
                        <ul class="list-footer">
                            <li v-for="extra in store.extras">
                                {{ extra }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-4"></div>
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
    font-size: 14px; 

    li {
        display: flex; 
        gap: 15px; 
        align-items : flex-start; 
        margin-right: 15px; 
    }
}

.icon {
    margin-top: 2px; 
    color : $yellow; 
}

</style>