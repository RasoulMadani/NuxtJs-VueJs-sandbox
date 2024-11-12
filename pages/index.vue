<script setup>

import {useToast} from "vue-toastification";

const {$hello} = useNuxtApp();
const toast = useToast();
function runToast(){
  toast.success("my toast successfully");
}
const liveToast = ref(null);
const {$bootstrap} = useNuxtApp();
function runBootstrapToast(){
  const toast1 = new $bootstrap.Toast(liveToast.value);
  toast1.show();
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

  <button @click="runBootstrapToast" type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div ref="liveToast" id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
$primary: green;
h1{
  color: $primary;
}
</style>