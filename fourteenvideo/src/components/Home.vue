<template>
    <h2>Home</h2>
    <ul>
      <li v-for="item in users" :key="item.name"> 

        <UserdataComp :data="item" />
        {{ item.name }}<br />
        {{ item.email }}
      </li>
    </ul>
  </template>
  
  <script>
  import UserdataComp from './User.vue'
  
  export default {
    name: "HomeComponent",
    components: {
      UserdataComp
    },
    data() {
      return {
        users: [
          { name: 'anil', email: 'aniltest@gmail.com' },
          { name: 'umer', email: 'umer@gmail.com' },
          { name: 'Rafay', email: 'Rafay@gmail.com' },
          { name: 'sames', email: 'sames@gmail.com' }
        ]
      };
    }
  }
  </script>
  