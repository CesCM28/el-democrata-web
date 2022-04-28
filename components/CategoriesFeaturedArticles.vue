<template lang="pug">
  .categories-featured-articles
    CategoryFeaturedArticles(v-for="category in categories" :category="category")
</template>

<script>
export default {
  name: 'CategoriesFeaturedArticles',
  components: {
    CategoryFeaturedArticles: () => import('@/components/CategoryFeaturedArticles'),
  },
  data: () => ({
    categories : []
  }),
  async fetch() {
    const response =  await this.$http.$get('categories')
    this.categories = response.data
  },
  fetchOnServer: false,

}
</script>

<style lang="scss">
.categories-featured-articles {
  color: black;
}

</style>

