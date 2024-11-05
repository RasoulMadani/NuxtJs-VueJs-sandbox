<script setup>
const title = ref('Title1');
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" content="Description" />
  </Head>
  <Body class="test-3"></Body>

<div>
 index page
  <NuxtLink to="/about">About Page</NuxtLink>
  <NuxtLink to="/posts">Posts Page</NuxtLink>
</div>
</template>

<style scoped>

</style>