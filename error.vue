<script setup lang="ts">
const error = useError();
console.log(error);
if(error.value?.statusCode === 404) {
  error.value.message = 'Page Not Found1';
}
function handleError(error) {
    clearError({redirect:'/'})
}

</script>

<template>
<div>
  <h1>Error Page</h1>
  <button @click="handleError">Home Page</button>
</div>
</template>

<style scoped>

</style>