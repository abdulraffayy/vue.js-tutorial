<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeComponent />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeComponent from './components/Home.vue' 
export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeComponent
  }
}
</script>

