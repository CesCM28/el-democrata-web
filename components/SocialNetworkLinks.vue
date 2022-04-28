<template lang="pug">
.social-network-links(:class="position")
  a.social-network-links__link(href="https://www.facebook.com/ElDemocrataMex/?ref=page_internal")
    img.social-network-links__link__network-logo(src="/fblogo.png")
  a.social-network-links__link(href="https://instagram.com/eldemocratamex?utm_medium=copy_link")
    img.social-network-links__link__network-logo(src="/iglogo.png")
  a.social-network-links__link(href="https://twitter.com/ElDemocrataMex")
    img.social-network-links__link__network-logo(src="/twlogo.png")
  a.social-network-links__link(href="#")
    img.social-network-links__link__network-logo(src="/tiktoklogo.png")
  
</template>

<script>
export default {
  name: 'SocialNetworkLinks',
  props: {
    position: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.social-network-links {
  height: $mobil-header-height * 0.3;
  display: flex;
  justify-content: space-around;
  &__link{
    height: inherit;
    &__network-logo {
      height: inherit;
    }
  }
}
.left{
  grid-column: 1;
}
.right{
  grid-column: 7 / 13;
}

@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .social-network-links {
    grid-column: 10 / 13;
    height: $header-height * 0.3;
    width: 90%;
  }
}


</style>
