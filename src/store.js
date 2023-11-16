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
    gamesInEvidence : [
        {
            tag: 'Most Popular',
            title: 'The Battlefield 4 Naval Strike',
            src: 'cms-banner-01.jpg'
        },
        {
            tag: 'Latest Game',
            title: 'Assassin\'s Creed Unity Game',
            src: 'cms-banner-02.jpg'
        }

    ],
    gamesInDiscount : [
        {
            tag: '20% Discount',
            title: 'Dragon\'s Dogma Videogame',
            src: 'cms-banner-03.jpg'
        },
        {
            tag: '30% Discount',
            title: 'World Of Tanks New Game',
            src: 'cms-banner-04.jpg'
        }
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