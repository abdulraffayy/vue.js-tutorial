<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeFade/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeFade from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeFade
  }
}
</script>

