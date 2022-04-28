<template lang="pug">
  .last-article(@click='openArticle(article)')
    // img.last-article__image(:src="article.image")
    img.last-article__image(src="https://via.placeholder.com/150")
    h2.last-article__title {{ article.title }}
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "LastArticle",
  data: () => ({
    article: []
  }),
  async fetch() {
    this.article = await this.$http.$get('articles/last')
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
  .last-article{
    position: relative;

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

@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .last-article{
    grid-column: 1 / 7;
    grid-row: 1 / 12;
    font-size: 1.3rem;
  }
}

</style>
