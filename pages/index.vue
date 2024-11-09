<script setup>
import {useCounter} from "~/stores/counter.js";
const counter = useCounter();
</script>

<template>


<div>

  <NuxtLink to="/about">About Page</NuxtLink>
  <NuxtLink to="/posts">Posts Page</NuxtLink>

  <br>
  <br>
  <h1>Count : {{counter.count}}</h1>
  <button @click="counter.increment(3)">Increment</button>
  <button @click="counter.decrement(3)">Decrement</button>
</div>

</template>

<style scoped>

</style>