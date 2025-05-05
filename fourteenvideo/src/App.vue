<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Reuse Component"/>
  <Homecompthing/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Homecompthing from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Homecompthing,
  }
}
</script>


