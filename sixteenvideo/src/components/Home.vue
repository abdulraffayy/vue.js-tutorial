<template>
    <h1>Class Binding | Dynamic Style</h1>
        <h2 :class="{fiv:colorful}">Home Component </h2>
    
    
</template>

<script>
export default {
    name: "HomeRafay",
    data () {
        return {
            colorful:false
        }
    }

}
</script>

<style scoped>
h2 {
    color: black;
    background-color: green;
}
.fiv {
    padding: 19px;
    width: 200px;
}
</style>