<template>
    <h1>Computed Property</h1>  
    <h2>Counter: {{ counter }}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        counter: 0
      }
    },
    watch: {
      counter(value, previousValue) {
        if(value > 5 && value>previousValue) {
            alert("Stopping the counter");
        }

      }
    }

  }
  </script>
  
  <style scoped>
  h1 {
    color: red;
  }
  </style>
  