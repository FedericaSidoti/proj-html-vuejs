import { reactive } from 'vue'

export const store = reactive({
	navItems : [
        "Home",
        "Shop",
        "Blog",
        "Media",
        "ShortCode",
        "Features"
    ],
    products : [
        {
            title: 'Shopping Mahjong Connect',
            vote: 4, 
            discount: 44, 
            price: 100,
            src: '01-768x768.jpg'
        },
        {
            title: 'Buddy and Lucky Solitaire',
            vote: 0, 
            discount: 0, 
            price: 83,
            src: '02-768x768.jpg'
        },
        {
            title: 'Taishou x Alice Epilogue',
            vote: 0, 
            discount: 0, 
            price: 90,
            src: '03-768x768.jpg'
        },
        {
            title: 'Labirinth of the World',
            vote: 2, 
            discount: 0, 
            price: 110,
            src: '04-768x768.jpg'
        }
    ],
    deals : [
        {
            title: 'Shopping Mahjong Connect',
            vote: 4, 
            discount: 44, 
            price: 100,
            src: '01-768x768.jpg'
        },
        {
            title: 'BangBangShooting',
            vote: 0, 
            discount: 0, 
            price: 56,
            src: '05-768x768.jpg'
        },
        {
            title: 'Buddy and Lucky Solitaire',
            vote: 0, 
            discount: 0, 
            price: 83,
            src: '02-768x768.jpg'
        },
        {
            title: 'Taishou x Alice Epilogue',
            vote: 0, 
            discount: 0, 
            price: 90,
            src: '03-768x768.jpg'
        },
    ]
})