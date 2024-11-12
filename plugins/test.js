export default defineNuxtPlugin((nuxtApp)=>{
    // console.log(nuxtApp);
    return nuxtApp.provide('hello',(name)=>`hello${name}`);
})