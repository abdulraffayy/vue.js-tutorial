<template>
    <h3>Child Comnponent  {{name}}</h3>
    <h3>User Data Will Show  {{users.name}}</h3>
    <button v-on:click="getData()">Called Fucntion</button>
 



</template>

<script>
export default {
    name: "ChildDataComponent", 
    props: {
        name:String,
        users:Object,
        getData:Function,
    }
}
</script>

<style>
h3 {
    color: chocolate;
}
</style>
