<template>
    <h1>User</h1>
    <div >
        <h3>Peter</h3>
        <h3>JohN</h3>
        <h3>bRUce</h3>
        <h3>Data: {{ data }}</h3>
    </div>
</template>

<script>
export default {
    name: 'UserPage',
    props: {
        data: String
    }
}                       
</script>

<style scoped>
h1 {
    color: red;
}
</style>
