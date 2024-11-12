<script setup>

const {$hello} = useNuxtApp();
</script>

<template>


<div>
  <h2>{{$hello('ali sheikh')}}</h2>
  <NuxtLink to="/about">About Page</NuxtLink>
  <NuxtLink to="/posts">Posts Page</NuxtLink>

</div>

</template>

<style scoped>

</style>