import { defineStore } from 'pinia'
import { findIndex, sumBy } from 'lodash'

const store = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),
  getters: {
    isCartEmpty(state) {
      return state.cartItems.length === 0
    },
    totalCartItems(state) {
      return sumBy(state.cartItems, (item) => item.qty)
    }
  },
  actions: {
    addItem(item, qty) {
      const index = findIndex(this.cartItems, (cartItem) => {
        return cartItem.id === item.id
      })

      if (index > -1) {
        // found existing item, update qty
        this.cartItems[index].qty = this.cartItems[index].qty + qty
      } else {
        // new item
        this.cartItems.push({
          ...item,
          qty
        })
      }
    },
    removeItem(item) {
      const index = findIndex(this.cartItems, (cartItem) => {
        return cartItem.id === item.id
      })

      if (index > -1) {
        this.cartItems.splice(index, 1)
      }
    }
  }
})

export default store
