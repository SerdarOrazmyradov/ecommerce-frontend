const CURRENCY = '$'

const NAV_ITEMS = [
  'Collections',
  'Men',
  'Women',
  'About',
  'Contact',
]

const PRODUCT = {
  id: 0,
  brand: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  images: [
    {
      full: '/image-product-1.jpg',
      thumbnail: '/image-product-1-thumbnail.jpg'
    },
    {
      full: '/image-product-2.jpg',
      thumbnail: '/image-product-2-thumbnail.jpg'
    },
    {
      full: '/image-product-3.jpg',
      thumbnail: '/image-product-3-thumbnail.jpg'
    },
    {
      full: '/image-product-4.jpg',
      thumbnail: '/image-product-4-thumbnail.jpg'
    }
  ],
  price: {
    sell: 12500,
    original: 25000
  }
}

export { CURRENCY, PRODUCT, NAV_ITEMS }
