<template lang="pug">
  header.header
    Logo
    img.menu-toggle(@click='toggleNavBar' src="/menu-outline.svg")
    NavBar(:isNavBarVisible="isNavBarVisible")
    SocialNetworkLinks(position="right")
</template>

<script>

export default {
  name: "Header",
  components: {
    NavBar: () => import('~/components/NavBar'),
    Logo: () => import('~/components/Logo'),
    SocialNetworkLinks: () => import('~/components/SocialNetworkLinks'),
  },
  data: () => ({ 
    isNavBarVisible: false
  }),
  methods: {
    toggleNavBar() {
      console.log(this.isNavBarVisible)
      this.isNavBarVisible = !this.isNavBarVisible
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: black;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: $mobil-header-height;
  padding: 0 15px;
}
.menu-toggle {
  position: fixed;
  background: $blue;
  bottom: 5%;
  right: 5%;
  border-radius: 50%;
  padding: 10px;
  height: 50px;
  width: 50px;
  grid-column-start: 12;
  grid-column-end: 13;
  margin: auto;
  z-index: 10000;
}
@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .header {
    margin: 0;
    height: $header-height;
  }
  .menu-toggle {
    display: none;
  }
}
</style>
