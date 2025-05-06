<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeComponentProps />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeComponentProps from './components/Hom.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeComponentProps
  }
}
</script>

