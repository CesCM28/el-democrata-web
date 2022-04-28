<template lang="pug">
nav.nav(:class="[{ 'nav--visible': isNavBarVisible }]")
  NuxtLink.nav__link(:to="{ name: 'categories-id-articles', params: {id: category.id}}" v-for="category in categories") {{ category.name }}
</template>
<script>
export default {
  name: "NavBar",
  props: {
    isNavBarVisible: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    categories: []
  }),
  async fetch() {
    const response = await this.$http.$get('categories')
    this.categories = response.data
  },
  fetchOnServer: false
}
</script>

<style lang="scss">
.nav {
  display: none;
  &--visible{
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 13;
    background: $blue;
    z-index: 1000;
  }
}

.nav__link{
  color: white;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 900;
  text-align: left;
  text-decoration: none;
  &:hover {
    color: white;
  }
}

@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .nav {
    grid-column: 1 / 5;
    display: flex;
    justify-content: space-around;
  }
  .nav__link {
    font-size: .8rem;
    font-weight: 600;
    text-transform: uppercase;
    &:hover {
      text-decoration: underline $blue solid 3px;
      text-underline-offset: 5px;
    }
  }
}
</style>
