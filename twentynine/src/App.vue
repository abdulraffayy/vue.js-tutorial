<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeComponentThis />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeComponentThis from './Home.vue'  
export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeComponentThis
  }
}
</script>


