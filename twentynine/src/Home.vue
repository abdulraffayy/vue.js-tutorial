<template>

    <h1>Home {{ message }}</h1>
</template>

<script>
export default {
    name: 'HomeComponentThis',
    data() {
        {
            console.log('created')
            return {
                message: 'Hello World'
            }
        }
    },
    beforeCreate() {
    alert('beforeCreate')
},
created() {
    alert('created')
},

}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
