<template>
  <div>
    <Header></Header>
    <NuxtPage>
    </NuxtPage>
    <Footer></Footer>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (title) => {
    return title ? `${title} || Page Title ` : '';
  }
})
</script>
