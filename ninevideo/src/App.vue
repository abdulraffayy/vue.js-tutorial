<template>
  <HelloWorld msg="Get input value" />
  <input v-model="email" type="text" placeholder="Enter Email" />
  <br><br>
  <input v-model="password" type="password" placeholder="Enter Password" />
  <br><br>
  <button v-on:click="getData" type="button">Get Value</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    getData() {
      console.log("Value:  ",this.email ,this.password);
    }
  },
  components: {
    HelloWorld
  }
}
</script>
