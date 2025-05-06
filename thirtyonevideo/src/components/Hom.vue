<template>
    <h1>Home</h1>
    <h1>Counter: {{ count }}</h1>
    <button v-on:click="count=count+1">Updated Now</button>

</template>

<script>
export default {
    name: 'HomeComponentProps',
    data() {
        return {
            count: 0
        }
    },
    beforeUpdate() {
        console.log('beforeUpdate', this.$refs.count)
    },
    updated() {
        console.log('updated', this.$refs.count)
    }
}
</script>

<style scoped>
h1 {
    color: rgba(79, 222, 13, 0.298);
}
</style>
