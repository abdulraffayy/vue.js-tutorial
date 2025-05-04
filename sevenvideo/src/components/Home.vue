<template>
    <h1 v-on:mousemove="MouseEvent">Home Page CliCK Event Paractice</h1>
    <button v-on:click="getdata('Button 1 Clicked')">Click Me</button>
    <button v-on:dblclick="getdata('Button double Clicked')">Click Me</button>
    <h2>Count data:{{ data }} </h2>

</template>

<script>
export default {
    name:  "HomeData",
    data() {
   return {
    data:2,
   }
    },
    methods: {
        getdata()
        {
            this.data = this.data+1;
            
        },
        MouseEvent () {
            console.log("Mouse Event Called")
        }
    }
}
</script>

<style scoped>
h1 {
    color: cadetblue;
}
</style>