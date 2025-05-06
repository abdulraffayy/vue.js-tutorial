<template>
  <button v-on:click="show=!show">Toggle User</button>
    <UserComponent v-if="show" />
</template>

<script>
import UserComponent from './User.vue'
export default {
    name: 'HomeComponent',
    data() {
        return {
            show:true
        }
    },
    components: {
        UserComponent,

    }       
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
