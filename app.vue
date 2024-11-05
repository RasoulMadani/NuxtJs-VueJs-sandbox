<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <NuxtPage>
    </NuxtPage>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (title) => {
    return title ? `${title} || Page Title ` : '';
  }
})
</script>
