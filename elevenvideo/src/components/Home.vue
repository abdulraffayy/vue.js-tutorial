<template>
    <h2>if else conditions | conditional rendering</h2>
    <h2 v-if="show">If Condition</h2>
    <h2 v-else>Else Condition</h2>


    <button v-on:click="show=!show">Toggle</button>

</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            show:false
        }
    }
}
</script>

<style>
h2 {
    color: blue;
}
</style>