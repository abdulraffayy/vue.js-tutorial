<template>
    <h1>Ref with Interview question</h1>
    <input type="text" ref="inputRef" />
    <button  v-on:click="getData">Clicked Data</button>
</template>

<script>
export default {
    name: 'HomeRafayRaja',
    methods: {
        getData(){
            this.$refs.inputRef.focus()
            this.$refs.inputRef.style.color = 'red'
            
            let value = this.$refs.inputRef.value
            console.log(value)
        }
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
