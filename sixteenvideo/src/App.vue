<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeRafay/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeRafay from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeRafay,
  }
}
</script>


