<template>
    <div>
      <h2>About Us</h2>
      <Teachercomp name="peter" />
      <StudentData :name="name"/>
    </div>
  </template>
  
  <script>
  import Teachercomp from './Teacher.vue'
  import StudentData from './Student.vue'
  
  export default {
    name: "AboutUsPages",
    data () {
     return {
      name: "Bruce"
     }
    },
    components: {
      Teachercomp,
      StudentData,
    }
  }
  </script>
  