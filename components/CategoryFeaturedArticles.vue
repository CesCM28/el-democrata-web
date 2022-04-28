<template lang="pug">
.category-featured-articles
  .category
    h2.category__title {{ category.name }}
    .category__articles-row
      .article(
        v-for="article in articles" 
        @click="openArticle(article)"
      )
        img.article__image(:src="'http://eldemocrata.mx/' + article.image")
        h2.article__title {{ article.title }}
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CategoryFeaturedArticles',
  props: ['category'],
  data: () => ({
    articles: []
  }),
  fetchOnServer: false,
  methods: {
    ...mapMutations({
      openArticle: 'article/openArticle'
    }),
  },
  components: {
  },
  async fetch() {
    const response =  await this.$http.$get(`categories/${this.category.id}/articles/featured`)
    this.articles = response
  }
}
</script>

<style lang="scss">
.category-featured-articles {
  margin-bottom: 1rem;
  .category {
    &__title {
      font-size: 1.3rem;
      padding-left: 1rem;
      text-transform: capitalize;
    }
    &__articles-row {
      display: flex;
      justify-content: space-around;
    }
  }
  .article {
    background-position: center;
    background-size: cover;
    position: relative;
    width: 45%;
    &__title {
      left: 0;
      right: 0;
      bottom: 5%;
      width: 95%;
      margin: auto;
      font-size: $mobile-title-font-size;
    }
    &__image {
      width: 100%;
      height: 150px;
    }

    &:hover::after {
      cursor: pointer;
      content: '';
      width: 100%;
      height: 100%;
      z-index: 10;
      position: absolute;
      top: 0;
      background: rgb(255,255,255);
      background: linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(33,146,209,1) 100%); 
    }
    &:last-of-type {
      display: none;
    }
  }
}

@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .category-featured-articles {
    width: 70%;
    max-width: 1280px;
    .article {
      margin: 0 5px;
      &:last-of-type {
        display: block;
      }
    }
  }
}

</style>

