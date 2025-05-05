<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeRafayAzad />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeRafayAzad from './components/Home.vue'  
export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeRafayAzad,
  }
}
</script>

