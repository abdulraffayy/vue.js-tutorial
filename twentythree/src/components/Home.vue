<template>
    <h1>Home Comp</h1>
    <input type="text" v-model.trim="data" />
    <h2>Data: {{ data }}</h2>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            data: ''
        }
    }
}
</script>


<style scoped>
h1 {
    color: red;
}

</style>
