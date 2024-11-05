<script setup>
const router = useRoute();
console.log(router.params);
</script>

<template>
<h1>allah {{ router.query.name}}</h1>
</template>

<style scoped>

</style>