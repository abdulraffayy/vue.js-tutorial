<template>
    <h2>User Component</h2>
    <button v-on:click="getUser(userName)">Sent User Name</button>
</template>

<script>
export default {
    name: 'UserRafayAzad',
    data() {
        return {
            userName: 'Rafay Azad',
            userAge: 20,
            userEmail: 'rafayazad@gmail.com',
        }
    },
    props: {
        getUser: {
            type: Function,
            required: true,
        }
    }
    
}
</script>   

<style scoped>
h2 {
    color: blue;
}
</style>