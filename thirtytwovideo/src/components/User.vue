<template>
    <h1>User Component Data</h1>
</template>

<script>
export default {
    name: 'UserComponent',
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    }
}
</script>

<style scoped>
h1 {
    color: rgb(10, 53, 228);
}
</style>
