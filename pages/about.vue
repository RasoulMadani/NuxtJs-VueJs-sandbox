<script setup>
  const count = useState('count',()=>'0');
</script>

<template>

   <div>about</div>
    <NuxtLink to="/">About Page</NuxtLink>
    <br>
    <br>
  <h1>Count : {{count}}</h1>
  <button @click="count++">Increment</button>
  <button @click="count--">Decrement</button>
</template>

<style scoped>

</style>