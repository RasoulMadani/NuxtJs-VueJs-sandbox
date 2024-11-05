<script setup lang="ts">
function goToPosts(){
  return navigateTo('/posts');
}
</script>

<template>
<h1>home</h1>
  <NuxtLink to="/about">About Page</NuxtLink>
  <button @click="goToPosts">Posts Page</button>
</template>

<style scoped>

</style>