<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="tabs = 'PhpLanguageComponent'">Show PHP</button>
  <button @click="tabs = 'JavaLanguageComponent'">Show Java</button>
  <button @click="tabs = 'NodeLanguageComponent'">Show Node</button>
  <HomeData />
  <!-- <PhpLanguageComponent />
  <JavaLanguageComponent />
  <NodeLanguageComponent /> -->
  <component :is="tabs" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeData from './components/Home.vue'
import PhpLanguageComponent from './components/php.vue'
import JavaLanguageComponent from './components/Java.vue'
import NodeLanguageComponent from './components/Node.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeData,
    PhpLanguageComponent,
    JavaLanguageComponent,
    NodeLanguageComponent,
  },
  data() {
    return {
      tabs: 'PhpLanguageComponent'
    }
  }
}
</script>

<style>
h1 {
  color: red;
}
</style>
