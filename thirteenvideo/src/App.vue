<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <AboutPage/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AboutPage from './components/About.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutPage
  }
}
</script>


