<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeRafayRaja />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeRafayRaja from './components/Home.vue' 
export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeRafayRaja,
  }
}
</script>


