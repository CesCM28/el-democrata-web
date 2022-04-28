<template lang="pug">
.article-wrapper
  Header
  .article
    img.article__image(:src="imageUrl")
    h1.article__title(v-html="article.title")
    .article__content(v-html="article.content")
  Footer
</template>

<script>
export default {
  name: "Article",
  components: {
    Header: () => import('@/components/Header'),
    Footer: () => import('@/components/Footer'),
  },
  data: () => ({
    article: [],
    imageUrl: 'https://via.placeholder.com/300'
  }),
  async fetch() {
    this.article = await this.$http.$get(`articles/${this.$route.params.id}`)
    this.imageUrl = `http://eldemocrata.mx/${this.article.image}`
  },
  head() {
    console.log('article')
    console.log(this.article.title)
    return {
    title: this.article.title,
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
      { hid: 'title', name: 'title', content: this.article.title },
      { hid: 'description', name: 'description', content: this.article.description },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: this.article.title },
      { hid: 'og:description', name: 'og:description', content: this.article.description },
      { hid: 'og:image', name: 'og:image', content: this.imageUrl },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
      { hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
      { hid: 'twitter:image', name: 'twitter:image', content: this.imageUrl },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
    ]
  }
  },
  fetchOnServer: false,
}
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  &__title {
    width: 80%;
    font-size: $mobile-title-font-size;
  }
  &__image {
    width: 90%;
  }

  &__content {
    width: 80%;
    margin: 0 auto;
    font-size: $mobile-content-font-size;
    overflow-wrap: anywhere;
  }

}
@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .article {
    width: 70%;
    .article__image {
      max-height: 400px;
    }
    &__title {
      font-size: $pc-title-font-size;
    }
    &__content {
      font-size: $pc-content-font-size;
    }
  }
}
</style>
