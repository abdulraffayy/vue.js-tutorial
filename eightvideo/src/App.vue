<template>
<HelloWorld msg="Two way binding"/>
<HomeThing/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeThing from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeThing
  }
}
</script>


<style scoped>

h1 {
  color: rebeccapurple
}
</style>


