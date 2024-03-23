<template>
  <div class="container">
    <div class="products">
      <h2>Products</h2>
      <div class="product-grid">
        <div class="product-item" v-for="product in products" :key="product.id">
          <div class="product-details">
            <span>{{ product.name }}</span>
            <span>${{ product.price }}</span>
          </div>
          <button @click="addToCart(product)"><span class="icon">🛒</span></button>
        </div>
      </div>
    </div>

    <div class="cart">
      <h2>Cart</h2>
      <div class="cart-items">
        <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
          <div class="cart-details">
            <span>{{ item.name }}</span>
            <span>${{ item.price }}</span>
          </div>
          <button @click="removeFromCart(index)"><span class="icon">🗑️</span></button>
        </div>
      </div>
      <div class="total">Cart Total: ${{ calculateTotalPrice() }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
  { id: 4, name: 'Product 4', price: 10 },
  { id: 5, name: 'Product 5', price: 15 },
  { id: 6, name: 'Product 6', price: 20 },
  { id: 7, name: 'Product 7', price: 10 },
  { id: 8, name: 'Product 8', price: 15 },
  { id: 9, name: 'Product 9', price: 20 },
  { id: 10, name: 'Product 10', price: 10 },
  { id: 11, name: 'Product 11', price: 15 },
  { id: 12, name: 'Product 12', price: 20 }
]

const cartItems = ref([])

const addToCart = (product) => {
  cartItems.value.push(product)
}

const removeFromCart = (index) => {
  cartItems.value.splice(index, 1)
}

const calculateTotalPrice = () => {
  return cartItems.value.reduce((total, item) => total + item.price, 0)
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.products,
.cart {
  width: 48%;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product-item,
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: calc(50% - 5px);
}

.product-details,
.cart-details {
  flex-grow: 1;
}

.product-item button,
.cart-item button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
}

.product-item button:hover,
.cart-item button:hover {
  background-color: #0056b3;
}

.icon {
  margin-right: 5px;
}

.total {
  margin-top: 20px;
  font-weight: bold;
}
</style>
