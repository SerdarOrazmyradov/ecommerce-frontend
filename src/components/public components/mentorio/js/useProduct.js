import { computed } from 'vue'

const useProduct = (product) => {
  const { id, brand, name, description, images, price } = product

  const productImage = images[0]?.thumbnail

  return {
    id, brand, name, description, images, price, productImage
  }
}

export default useProduct
