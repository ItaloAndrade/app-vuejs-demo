<template>
  <div>
    <TableFavorite></TableFavorite>
  </div>
</template>

<script>
  export default {
    name: 'Favorite',
    components: {
      TableFavorite: () => import('@/views/components/TableFavorite')
    }
  }
</script>

<style>

</style>