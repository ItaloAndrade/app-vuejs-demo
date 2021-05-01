<template>
    <div> 
        <ItemComic></ItemComic>
    </div>
</template>

<script>
    export default {
        components: {
            ItemComic: () => import('@/views/components/ItemComic')
        }
    }
</script>

<style>

</style>