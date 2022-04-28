<template lang="pug">
.wrapper
  Header
  .category-articles
    h1.category-articles__title {{ category.name }}
    .article(v-for="article in articles" @click="openArticle(article)")
      img.article__image(:src=`'http://eldemocrata.mx/' + article.image`)
      .article__text
        h2.article__title {{ article.title }}
        p.article__description {{ article.description }}
  Footer
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: "NavBar",
  components: {
    Header: () => import('@/components/Header'),
    Footer: () => import('@/components/Footer'),
  },
  data: () => ({
    category: {},
    articles: {} 
  }),
  methods: {
    ...mapMutations({
      openArticle: 'article/openArticle'
    }),
  },
  async fetch() {
    this.category = await this.$http.$get(`categories/${this.$route.params.id}`)
    this.articles = await this.$http.$get(`categories/${this.$route.params.id}/articles`)
  },
  fetchOnServer: false,
}
</script>

<style lang="scss">
.category-articles {
  padding: 0 1rem;
  &__title {
    text-transform: capitalize;
    padding-left: 1rem;
  }
  .article {
    height: auto;
    width: 100%;
    margin: 1rem 0;
    display: flex;
    flex-direction: row;

    &__title {
      font-size: .8rem;
      margin: 0;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    &__image {
      height: 120px;
      width: 120px;
      margin-right: 1rem;
    }
    &__description {
      font-size: .6rem;

    }
  }
}
@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
.category-articles {
  &__title {
      font-size: 2rem;
  }
  .article {
    &__title {
      font-size: 1.8rem;
      margin: 1rem 0;
    }
    &__image {
      height: 300px;
      width: 300px;
      margin-right: 50px;
    }
    &__description {
      font-size: 1.5rem;
    }
  }
}
}
</style>

