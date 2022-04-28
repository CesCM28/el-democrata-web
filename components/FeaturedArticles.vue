<template lang="pug">
.featured-articles
  .article(
    v-for="(article, index) in articles" 
    :class="gridAreas[index]" 
    @click="openArticle(article)"
    )
    img.article__image(:src="'http://eldemocrata.mx/' + article.image")
    h2.article__title {{ article.title }}
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'FeaturedArticles',
  data: () => ({
    articles: [],
    gridAreas: ['a', 'b', 'c'],
  }),
  async fetch() {
    this.articles = await this.$http.$get('articles/featured')
  },
  fetchOnServer: false,
  methods: {
    ...mapMutations({
      openArticle: 'article/openArticle'
    }),
  }

}
</script>

<style lang="scss">
.featured-articles {
  display: grid;
  grid-template-areas: "a a"
                       "b c";
  grid-gap: 15px;
  margin-bottom: 2rem;

  .article {
    position: relative;
    &__title {
      left: 0;
      right: 0;
      bottom: 0;
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
  }
  .a {
    grid-area: a;
  }
  .b {
    grid-area: b;
  }
  .c {
    grid-area: c;
  }
}

@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .featured-articles {
    display: grid;
    grid-template-areas: "a b"
                         "a c";
    grid-gap: 15px;
    margin: 1rem;
    height: 600px;
    width: 70%;
    max-width: 1280px;
    .article {
      &__title {
        font-size: $pc-title-font-size;
      }
    }
    .a {
      height: 100%;
      .article__image {
        height: 450px;
      }
    }
    .b, .c {
      .article__image {
        height: 200px;
        width: 100%;
      }
    }
  }
}
</style>
