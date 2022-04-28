<template lang="pug">
.home
  Header
  FeaturedArticles
  CategoryFeaturedArticles
  Footer
</template>
<script>
export default {
  name: 'Home',
  components: {
    Header: () => import('@/components/Header'),
    FeaturedArticles: () => import('@/components/FeaturedArticles'),
    CategoryFeaturedArticles: () => import('@/components/CategoriesFeaturedArticles'),
    Footer: () => import('@/components/Footer'),
  },
}
</script>

<style lang="scss">
.home {

}
</style>
