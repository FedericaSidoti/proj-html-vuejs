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
    categories : [
        {
            name: 'Batman',
            img: 'category-image-01-446x550_t.jpg'
        },
        {
            name: 'Bayonetta',
            img: 'category-image-02-446x550_t.jpg'
        },
        {
            name: 'Dark Souls',
            img: 'category-image-03-446x550_t.jpg'
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
    menuProducts: [
        'Featured', 
        'New Arrivals',
        'Best Sellers'
    ],
    products : [
        [
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
        [
            {
                title: 'Shopping Mahjong Connect',
                vote: 3, 
                discount: 37, 
                price: 130,
                src: '05-768x768.jpg'
            },
            {
                title: 'Buddy and Lucky Solitaire',
                vote: 0, 
                discount: 0, 
                price: 67,
                src: '06-768x768.jpg'
            },
            {
                title: 'Taishou x Alice Epilogue',
                vote: 1, 
                discount: 10, 
                price: 95,
                src: '07-768x768.jpg'
            },
            {
                title: 'Labirinth of the World',
                vote: 2, 
                discount: 0, 
                price: 10,
                src: '08-768x768.jpg'
            }
        ],
        [
            {
                title: 'Shopping Mahjong Connect',
                vote: 5, 
                discount: 43, 
                price: 180,
                src: '09-768x768.jpg'
            },
            {
                title: 'Buddy and Lucky Solitaire',
                vote: 0, 
                discount: 0, 
                price: 73,
                src: '10-768x768.jpg'
            },
            {
                title: 'Taishou x Alice Epilogue',
                vote: 0, 
                discount: 0, 
                price: 98,
                src: '11-768x768.jpg'
            },
            {
                title: 'Labirinth of the World',
                vote: 2, 
                discount: 0, 
                price: 60,
                src: '12-768x768.jpg'
            }
        ],
        
    ],
    menuDeals: [
        '1026 days',
        '13 hours',
        '24 mins',
        '17 secs'
    ],
    deals : [
        [
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
            }
        ],
        [
            {
                title: 'Shopping Mahjong Connect',
                vote: 2, 
                discount: 20, 
                price: 100,
                src: '04-768x768.jpg'
            },
            {
                title: 'BangBangShooting',
                vote: 1, 
                discount: 10, 
                price: 156,
                src: '06-768x768.jpg'
            },
            {
                title: 'Buddy and Lucky Solitaire',
                vote: 0, 
                discount: 0, 
                price: 183,
                src: '07-768x768.jpg'
            },
            {
                title: 'Taishou x Alice Epilogue',
                vote: 2, 
                discount: 0, 
                price: 90,
                src: '08-768x768.jpg'
            }
        ],
        [
            {
                title: 'Shopping Mahjong Connect',
                vote: 1, 
                discount: 15, 
                price: 110,
                src: '09-768x768.jpg'
            },
            {
                title: 'BangBangShooting',
                vote: 0, 
                discount: 0, 
                price: 96,
                src: '10-768x768.jpg'
            },
            {
                title: 'Buddy and Lucky Solitaire',
                vote: 0, 
                discount: 0, 
                price: 88,
                src: '11-768x768.jpg'
            },
            {
                title: 'Taishou x Alice Epilogue',
                vote: 5, 
                discount: 70, 
                price: 190,
                src: '12-768x768.jpg'
            }
        ],
        [
            {
                title: 'Shopping Mahjong Connect',
                vote: 4, 
                discount: 44, 
                price: 100,
                src: '13-768x768.jpg'
            },
            {
                title: 'BangBangShooting',
                vote: 4, 
                discount: 0, 
                price: 256,
                src: '14-768x768.jpg'
            },
            {
                title: 'Buddy and Lucky Solitaire',
                vote: 0, 
                discount: 0, 
                price: 53,
                src: '15-768x768.jpg'
            },
            {
                title: 'Taishou x Alice Epilogue',
                vote: 0, 
                discount: 10, 
                price: 90,
                src: '16-768x768.jpg'
            }
        ],
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
    [
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
    [
        {
            name : 'On Pokèmon: Lorem Ipsum is simply text',
            date: 'Jen 18, 2021',
            comments: 0,
            src : 'Architecto-beatae-vitae-dicta.jpg'
        },
        {
            name : 'On Baldur\'sGate: Lorem Ipsum is simply text',
            date: 'May 30, 2021',
            comments: 0, 
            src : 'At-vero-eos-et-accusamus.jpg'
        },
        {
            name : 'On DragonBall: Lorem Ipsum is simply text',
            date: 'Apr 13, 2021',
            comments: 0, 
            src : 'Blandit-praesen-volupta.jpg'
        }
    ],
        
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