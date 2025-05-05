<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeData/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeData from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeData,
  }
}
</script>
