<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <AboutUsPages/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AboutUsPages from './components/Aboutus.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutUsPages
  }
}
</script>

 
