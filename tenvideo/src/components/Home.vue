<template>
    <h2>Get Checkbox and  Radio Button Value</h2>
    <h3>Technology</h3>
    <label for="java">Java</label>

    <input type="checkbox" value="java" id="java" v-model="technology"/>
    <label for="php">PHP</label>
    <input type="checkbox" value="php" id="php" v-model="technology"/>

    <label for="node">Node</label>
<input type="checkbox" value="node" id="node" v-model="technology"/>

<br/><br/>
<h3>Who i AM</h3>
<label for="student">Node</label>
<input type="radio" value="student" id="student" name="who" v-model="who" />
<br/><br/>

<label for="developer">developer</label>
<input type="radio" value="developer" id="developer" name="who" v-model="who" />
<h4>Selected Technology: {{technology}}</h4>
<h4>Who I am: {{who}}</h4>

</template>

<script>
export default {
    name: "HomeData",
    data () {
        return {
            technology:[],
            who: null
        }
    }
}
</script>

<style>
h2 {
    color: aquamarine;
    font-size: 50px;

}
</style>