<template>
  <div>
    <NuxtRouteAnnouncer/>
    <NuxtLayout name="custom">

      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (title) => {
    return title ? `${title} || Page Title ` : '';
  }
})
</script>
