<template>
        <h1>{{ProfileName}} Profile Pages</h1>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
    name: 'ProfileComponent',
    data(){
        return{
            ProfileName:''

        }
    },
    mounted(){
        const route = useRoute()
        const name = route.params.name
        console.log(name)
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
