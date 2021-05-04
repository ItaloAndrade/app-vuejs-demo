<template>
<div>
    <table-favorito></table-favorito>
</div>
</template>

<script>
   export default {
       name: 'Favorite',
       components: {
           TableFavorito: () => import('@/views/components/TableFavorite')
       },
   }
</script>

<style>

 </style>
