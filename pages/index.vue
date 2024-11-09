<script setup>
import {useCounter} from "~/composables/counter/useCounter.js";

const {count,increment,decrement} = useCounter();
</script>

<template>


<div>
 index page
  <h2>count : {{count}}</h2>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <br>
  <br>
  <NuxtLink to="/about">About Page</NuxtLink>
  <NuxtLink to="/posts">Posts Page</NuxtLink>
</div>
</template>

<style scoped>

</style>