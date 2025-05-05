<template>
  <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeSpecial />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeSpecial from './components/Home.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeSpecial,
  }
}
</script>   

