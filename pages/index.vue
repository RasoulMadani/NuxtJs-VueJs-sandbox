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
  <h1>{{$hello('ali sheikh')}}</h1>
  <NuxtLink to="/about">About Page</NuxtLink>
  <NuxtLink to="/posts">Posts Page</NuxtLink>
  <br>
  <button @click="runToast">run toast</button>
  <img src="/images/1.jpg" width="400"/>
  <div>
    <NuxtImg src="/images/1.jpg" alt="تصویر نمونه" width="300" height="200" />
  </div>
  <div class="h1">sdfsdf</div>
</div>

</template>

<style scoped lang="scss">
$primary: green;
h1{
  color: $primary;
}
</style>