<template>
    <h1>Home Component Render {{ 10 + 10 }}</h1>
    <h1>Home Component Render {{"HelloRafay".length}}</h1>
    <h3>Email: {{email}}</h3>
    <h3>mobileNumber: {{mobileNumber}}</h3>
    <h5>Name:{{ getName("Hmaza")}}</h5>
    <h6>Name:{{mobileNumber == 8888}}</h6>

  




</template>

<script>
export default {
    name: "HomePage",
    data()
    {
        return {
            email: "Anil@test.com",
            mobileNumber: "12334354564656776787897979",
            getName:function(a)
            {
                return a
            }
        }
    }
}
</script>


<style scoped>
h1{
    color: red
}

h3 {
    color: black;
    background-color: rgb(66, 105, 14);
}

h5 {
    color: rgb(165, 51, 51);
    background-color: gray;
}
</style>