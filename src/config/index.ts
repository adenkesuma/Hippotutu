export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      { 
        name: 'Editor picks', 
        href: '#', 
        image: '/nav/ui-kits/mixed.jpg' 
      },
      { 
        name: 'New Arrivals', 
        href: '#', 
        image: '/nav/ui-kits/blue.jpg' 
      },
      { 
        name: 'Bestsellers', 
        href: '#', 
        image: '/nav/ui-kits/purple.jpg' 
      }
    ]
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      { 
        name: 'Favourite Icon Picks', 
        href: '#', 
        image: '/nav/icons/picks.jpg' 
      },
      { 
        name: 'New Arrivals', 
        href: '#', 
        image: '/nav/icons/new.jpg' 
      },
      { 
        name: 'Bestselling Icons', 
        href: '#', 
        image: '/nav/icons/bestsellers.jpg' 
      }
    ]
  }
]
