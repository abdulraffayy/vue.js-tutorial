<template>
    <h1> beforeMount and mounted life cycle method {{ message }}</h1>
</template>

<script>
export default {
    name: 'HomeComponent',
    data() {
        return {
            message: 'Hello World'
        }
    },
    beforeMount() {
        console.log('beforeMount', this.$el)
    },
    mounted() {
        alert('mounted')
    }
}
</script>   

<style scoped>
h1 {
    color: red;
}
</style>
