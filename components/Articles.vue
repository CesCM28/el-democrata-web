<template lang="pug">
  .articles 
    LastArticle
    LatterArticles
       
</template>

<script>
export default {
  name: 'Articles',
  components: {
    LastArticle: () => import('@/components/LastArticle'),
    LatterArticles: () => import('@/components/LatterArticles'),
  },
}


</script>

<style lang="scss">
$articles-per-row: 3;

.articles {
  display: flex ;
  flex-direction: column;
  margin: 1rem auto;
  width: 90%;
  font-size: 1rem;
}

@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .articles {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
}
</style>
