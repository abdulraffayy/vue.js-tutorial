<template>
    <div>
        <h1>Child</h1>
        <header>
            <slot name="header"></slot>
        </header>
        <content>
            <slot name="content"></slot>
        </content>
        <footer>
            <slot name="footer"></slot>
        </footer>



    </div>
</template>

<script>
export default {
    name: 'ChildThing', // Renamed to be multi-word
  
}
</script>
