<template>
  <div>
    <NuxtRouteAnnouncer />
<!--    <NuxtWelcome />-->
<!--    <h2>KJLSDJF</h2>-->
    <NuxtPage/>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (title)=>{
    return title ?  `${title} || Page Title `: '';
  }
})
</script>
