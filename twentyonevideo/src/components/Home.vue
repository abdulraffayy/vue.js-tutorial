<template>
    <h1>Simple Form</h1>
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Enter your email" v-model="form.email" />
    <label for="password">Password</label>
    <input type="password" id="password" placeholder="Enter your password" v-model="form.password" />
    <button type="button" v-on:click="login">Login</button>
    
</template>

<script>
export default {
    name: 'HomeX',
    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
            console.log(this.form)
        }
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>