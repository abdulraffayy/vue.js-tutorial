<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomePage />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomePage  from './components/Home.vue'

export default {
  name: 'App',
  components: {   
    HelloWorld,
    HomePage
  }
}
</script>

