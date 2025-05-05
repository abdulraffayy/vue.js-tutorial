<template>
    <h1>HTML binding</h1>
    <h2>{{ text }}</h2>
    <div v-html="tag"></div>
        <div v-html="tag2"></div>

    

    

</template>

<script>
export default {
    name: "HomeFade",
    data () {
        return {
            text: "Rafat Azad",
            tag: "<h1>Anil Sidu</h1>",
            tag2: "<h1>Anil sidu mosewala</h1>"
        }
    }
}
</script>