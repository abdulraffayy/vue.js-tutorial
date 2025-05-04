<template>
    <h1>Hello Home COMPONENT </h1>
    <input type="text" v-model="count"/>
    <h2>Count: {{count}}</h2>
</template>

<script>
export default {
    name: "HomeThing",
    data () {
        return {
            count:0
        }
    }
}
</script>