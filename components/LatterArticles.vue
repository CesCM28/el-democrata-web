<template lang="pug">
  .latter-articles
    .latter-article(v-for="article in articles" @click="openArticle(article)")
      h3.latter-article__title {{ article.title }}
      // img.latter-article__image(:src="article.image")
      img.latter-article__image(src="https://via.placeholder.com/150")

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "LatterArticles",
  data: () => ({
    articles: []
  }),
  async fetch() {
    this.articles = await this.$http.$get('articles/latter')
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

.latter-articles{
  .latter-article {
    width: 100%;
    &__image {
      // display: none;
    }
  }
}

@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .latter-articles {
    grid-column: 7 / 13;
    grid-row: 1 / 12;
    .latter-article {
      position: relative;
      display: grid;

      &__title {
        text-align: justify;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 5%;
        width: 75%;
        margin: auto;
        font-size: 1.2rem;
        color: white;
        z-index: 100;
      }
      &__image {
        width: 100%;
        height: 50%;
      }

      &:hover::after {
        cursor: pointer;
        content: '';
        width: 100%;
        height: 100%;
        z-index: 10;
        display: block;
        top: 0;
        position: absolute;
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(33,146,209,1) 100%); 
      }
    }
  }
}

</style>

