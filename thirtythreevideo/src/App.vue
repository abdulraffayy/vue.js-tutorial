<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <router-link to="/">Home</router-link> <br><br>
  <router-link to="/login">Login</router-link> <br><br>

  <!-- dynamic route -->

  <router-link to="/profile/anil">Anil Profile</router-link> <br><br>
  <router-link to="/profile/peter">Peter Profile</router-link> <br><br>
  <router-link to="/profile/bruce">Bruce Profile</router-link> <br><br>


  

    <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
  

  }
}
</script>

