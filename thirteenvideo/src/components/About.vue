<template>
    <h2>Pass Data Parent to Child Component</h2>
    <ChildDataComponent name="Anil Sidu" :users="users" :getData="getData"/>
</template>

<script>
import ChildDataComponent from './Child.vue';

export default {
    name: "AboutPage",
    components: {
        ChildDataComponent,
    },
    data() {

        return {
            users: {name: "Peter", email: "Peter43@gmail.com"},
        }
    },
    methods:{
        getData() {
            console.log("Parent Function CALLED")
        }
    }
}
</script>

<style>
h2 {
    color: chartreuse;
}
</style>
