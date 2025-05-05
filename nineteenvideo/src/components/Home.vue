<template>
    <h1>send child to parent data component</h1>
    <UserRafayAzad :getUser="getUserName" />
    <h2>Child User Name: {{ ChildUser }}</h2>
</template>

<script>
import UserRafayAzad from './User.vue'
export default {    
    name: 'HomeRafayAzad',
    data() {
        return {
            ChildUser: '',
        }
    },
    components: {
        UserRafayAzad,
    },
    methods: {
        getUserName(name){
            this.ChildUser = name
        }
    }
}
</script>

<style scoped>
h1 {
    color: red;
}

</style>
