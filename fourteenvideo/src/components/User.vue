<template>
    <h1> user Component</h1>
    <div class="div">
        <h2>{{data.name }}</h2>
        <h2>{{data.email }}</h2>
        <button v-on:click="getData()">Alert Name</button>
    </div>
    

    
</template>

<script>
export default {
    name: "UserdataComp",
    props: {
        data:Object
    },
    methods: {
        getData() {
             alert("Hello")
        }
    }
}
</script>

<style>
.div{
    background-color: skyblue;
    padding: 10px;
    border-bottom: 1px solid black;
}
</style>