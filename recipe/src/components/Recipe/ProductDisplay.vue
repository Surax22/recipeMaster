<template>
    <div class="container">
        <div class="cards-container">
            <products />
        </div>
    </div>
</template>

<script>
import Products from './Products.vue';
    export default {
   name:"container",
    components: { Products }
}
</script>

<style  scoped>
    
</style>