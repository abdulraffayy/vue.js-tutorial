<template>
    <p>{{ form }}</p>
    <h1>Home</h1>  
    <label for="email">Email</label><br>
    <input type="email" id="email" placeholder="Enter your email" v-model="form.email" /><br><br>
    <label for="password">Password</label><br>
    <input type="password" id="password" placeholder="Enter your password" v-model="form.password" /><br><br>
    <button type="button" v-on:click="login">Login</button><br><br>
    <label for="country">Country</label><br><br>
    <select id="country" v-model="form.country">
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
        <option>Canada</option>
        <option>Australia</option>
        <option>New Zealand</option>
        <option>South Africa</option>
    </select><br><br>
    <h3>Technology</h3>
    <input
    type="checkbox"
    id="html"
    value="HTML"
    v-model="form.technology"
  />
  <label for="html">HTML</label><br>

  <input
    type="checkbox"
    id="css"
    value="CSS"
    v-model="form.technology"
  />
  <label for="css">CSS</label><br>

  <input
    type="checkbox"
    id="js"
    value="JavaScript"
    v-model="form.technology"
  />
  <label for="js">JavaScript</label><br>

  <br>

  <label for="gender">Gender</label><br>
  <input
    type="text"
    id="gender"
    placeholder="Enter your gender"
    v-model="form.gender"
  />
  <label for="gender">Female</label>
  <input    
    type="text"
    id="gender"
    placeholder="Enter your gender"
    v-model="form.gender"
  />

</template>

<script>
export default {
    name: 'HomeSpecial',
    data() {
        return {
            form: {
                email: '',
                password: '',
                country: '',
                technology: [],
                gender: '',
            }           
        }
    },
    methods: {
        login() {
            console.log(this.form)
            alert('Login successful')
        }
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
