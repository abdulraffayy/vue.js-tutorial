<template>
  <HelloWorld msg="Welcome to Your Fourth Video"/>
  <HomePage/>
  <AboutPage/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/Home.vue'
import AboutPage from './components/About.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage,
    AboutPage
  }
}
</script>
