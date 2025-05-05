<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <AboutSection/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AboutSection from './components/About.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutSection
  }
}
</script>


