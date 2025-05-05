<template>
    <h1>Non-Props Data</h1>
    <UserPage data="John Doe" id="user-component" />
</template>

<script>
import UserPage from './User.vue'
export default {
    name: 'HomePage',
    components: {
        UserPage
    }           
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>                            
