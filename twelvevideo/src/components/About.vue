<template>
    <h1> For Loop and List</h1>
    <ul>
    <li v-for="rafay in technology" :key="rafay">
    {{rafay}}
    </li>
    </ul>
    <br/>

    <ul>
    <li v-for="item in users" :key="item">
   Name is: {{item.name}} and Email is: {{item.email }}
    
    </li>
    </ul>
</template>

<script>
export default {
    name: 'AboutSection',
    data() {
        return{
            technology: ['java', 'php', 'Node', 'HTML'],
            users:[
            {name:"Rafay", email: "rafayazad23@gmail.com"},
            {
                name:"Ali Sheir", 
                email: "Alisheirshah23@gmail.com"


            },
            {
                name:"Bruce", 
                email: "Bruce23@gmail.com"


            }

        ]
        }
      
    }
}
</script>