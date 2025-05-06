<template>
  <div class="product">
    <h1>Home</h1>
    <ChildThing />
    <ChildThing>
        <h1>Codestep by step </h1>
        <button>Buy Now </button>
        <template v-slot:header>
            <p>A vue js  product</p>
        </template>
        <template v-slot:content>
            <p>A vue js  product</p>
        </template>
        <template v-slot:footer>
            <p>A vue js  product</p>
        </template>
    </ChildThing>
  </div>
</template>

<script>
import ChildThing from './Child.vue' // Make sure this matches the export name

export default {
  name: 'HomePage',
  components: {
    ChildThing
  }
}
</script>


<style scoped>
.product {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}
</style>
