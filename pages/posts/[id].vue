<script setup>
const router = useRoute();
console.log(router.params);
</script>

<template>
<h1>allah {{ router.params.id}}</h1>
</template>

<style scoped>

</style>