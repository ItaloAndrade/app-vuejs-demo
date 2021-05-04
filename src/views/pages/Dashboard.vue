<template>
    <div> 
        <characters></characters>
    </div>
</template>  

<script> 
    export default {
        components: {
            Characters: () => import('@/views/components/CharactersCard')
        }       
    }
</script>

<style>

</style>