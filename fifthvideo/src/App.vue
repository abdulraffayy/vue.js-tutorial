<template>
  <HelloWorld msg=" Interpolation and Data"/>
<HomePage/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomePage from "./components/Home.vue"

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage,
  }
}
</script>

