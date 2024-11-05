<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
<!--    <NuxtWelcome />-->
<!--    <h2>KJLSDJF</h2>-->
    <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (title)=>{
    return title ?  `${title} || Page Title `: '';
  }
})
</script>
