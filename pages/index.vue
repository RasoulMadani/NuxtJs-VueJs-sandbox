<script setup>

import {useToast} from "vue-toastification";

const {$hello} = useNuxtApp();
const toast = useToast();
function runToast(){
  toast.success("my toast successfully");
}
</script>

<template>


<div>
  <h2>{{$hello('ali sheikh')}}</h2>
  <NuxtLink to="/about">About Page</NuxtLink>
  <NuxtLink to="/posts">Posts Page</NuxtLink>
  <br>
  <button @click="runToast">run toast</button>

</div>

</template>

<style scoped>

</style>