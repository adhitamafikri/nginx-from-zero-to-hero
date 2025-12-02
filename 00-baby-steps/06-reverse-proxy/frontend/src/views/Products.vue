<template>
  <div>
    <h1>Products Page</h1>
    <p>Here are our products.</p>

    <div v-for="product in products" :key="product.id">
      {{ product.name }} | {{ product.model }} | {{ formatPrice(product.price) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Product {
  id: number;
  name: string;
  model: string;
  price: number;
}
const products = ref<Product[]>([]);

const formatPrice = (price: number): string => {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

onMounted(() => {
  console.log("hello from here");
  fetch("http://nginx-api-gateway.local:8080/api")
    .then((response) => response.json())
    .catch((error) => console.error("Error: ", error));

  fetch("http://nginx-api-gateway.local:8080/api/products")
    .then((response) => response.json())
    .then((data) => {
      products.value = data as Product[];
    })
    .catch((error) => console.error("Error: ", error));
});
</script>

<style scoped></style>
