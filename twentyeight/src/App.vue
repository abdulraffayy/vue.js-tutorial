<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <teleport to="#footer">
    <FooterComponent />
  </teleport>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FooterComponent from './components/Footer.vue' 
export default {
  name: 'App',
  components: {
    HelloWorld,
    FooterComponent
  }
}
</script>


