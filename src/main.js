import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faPercentage } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, 
    faMagnifyingGlass, 
    faShoppingBag, 
    faTruck, 
    faSackDollar, 
    faPercentage, 
    faHandHoldingDollar, 
    faCircle, 
    faCalendarDays, 
    faComments, 
    faLocationDot, 
    faPhone, 
    faEnvelope, 
    faPaperPlane,
    faFacebookF,
    faTwitter,
    faGooglePlusG,
    faSkype,
    faInstagram,
    faPlus,
    faLink, 
    faHandPointUp,
    faHeart,
    faArrowsUpDownLeftRight,
    faEye)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
