<template>
    <h1>Student Data</h1>
    <h2>My Name is {{name}}</h2>

  </template>
  
  <script>
  export default {
    name: "StudentData", 
    props: {
      name: String
    }
  }
  </script>
  