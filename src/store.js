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
    ],
    members : [
        {
            name: 'Lules Charles',
            role: 'Web Designer',
            cit : 'Maturità dell\'uomo significa avere ritrovato la serietà che si metteva nel gioco da bambini.',
            src: 't5-1-100x100_left.jpg'
        },
        {
            name: 'Mark Gaskel',
            role: 'Social Media Manager',
            cit : 'Il lavoro consiste in qualsiasi cosa il corpo sia obbligato a fare... Giocare consiste in qualsiasi cosa che il corpo non sia obbligato a fare.',
            src: 't4-1-100x100_left.jpg'
        },
        {
            name: 'Johnny Bravo',
            role: 'Producer',
            cit : 'La gente non smette di giocare perché diventa vecchia; diventa vecchia perché smette di giocare.',
            src: 't2-1-100x100_left.jpg'
        }
    ],
    blogs : [
        {
            name : 'On The Last Of Us: Lorem Ipsum is simply text',
            date: 'Jen 18, 2021',
            comments: 0,
            src : 'Nisi-ut-aliquid-ex-ea-com.jpg'
        },
        {
            name : 'On Dragon Age: Lorem Ipsum is simply text',
            date: 'May 30, 2021',
            comments: 0, 
            src : 'Omnis-iste-natus-error-sit.jpg'
        },
        {
            name : 'On The Witcher: Lorem Ipsum is simply text',
            date: 'Apr 13, 2021',
            comments: 0, 
            src : 'Rerum-facilis-est-et-exped.jpg'
        }
    ],
    partners : [
        'brand-01.png',
        'brand-02.png',
        'brand-03.png',
        'brand-04.png',
        'brand-05.png'
    ], 
    informations: [
        'Bookmark',
        'Features',
        'Sitemap',
        'Lists',
        'Contact Us'
    ],
    extras : [
        'Delivery',
        'Cart',
        'Terms Conditions',
        'My Account',
        'About Us'
    ]
})