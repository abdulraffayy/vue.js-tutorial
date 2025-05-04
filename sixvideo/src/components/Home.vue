<template>
    <h2>Methods Wit Params Home Comp</h2>
    <h2>Email Copy: {{email}}</h2>
    <h3>Name: {{getName("Peter")}}</h3>
    <h3>All Data: {{getData()}}</h3>
    <h3>All Data Name: {{getData().name}}</h3>
    <h3>All Data: {{getData().email}}</h3>





</template>

<script>
export default{
    name: "HomeData",
    data() {
        return {
            email: "abdullahDevopscloudquik@gmail.com",
        }
    },
    methods:{
        getName(name)
        {
            return name;
        }, 
        getData () {
            return {
                name: "Rafay",
                email: this.email
            }
        }
    }
}
</script>

<style scoped>
h2 {
    color: cadetblue;
}
h3 {
    color: blue;
}
</style>