<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>    
  <HomeX />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeX from './components/Home.vue' 
export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeX
  }
}
</script>


