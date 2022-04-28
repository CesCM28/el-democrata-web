<template lang="pug">
  footer.footer
    Logo
    .footer__about-us 
      h2.footer__about-us__title Nosotros
      .footer__about-us__text Somos un periódico digital enfocado en lo político con sede en la ciudad de Chihuahua

    .footer__contact
      h2.footer__contact__title Contacto
      a.footer__contact__text(href="mailto:contacto@eldemocrata.mx") contacto@eldemocrata.mx
    SocialNetworkLinks(position="left")
</template>

<script>

export default {
  name: "Footer",
  components: {
    Logo: () => import('~/components/Logo'),
    SocialNetworkLinks: () => import('~/components/SocialNetworkLinks'),
  },
}
</script>

<style lang="scss">
.footer {
  background-color: black;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: auto;
  padding: 0 15px 30px 15px;
  position: absolute;
  bottom: 0;
  &__about-us{
    color: white;
    font-size: .6rem;
    grid-column: 1 / 13;
  }
  &__contact {
    color: white;
    font-size: .6rem;
    grid-column: 1 / 13;
    margin-bottom: 1rem;
    &__text {
      color: inherit;
      text-decoration: none;
    }
  }

}
@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .footer{
    margin: 0;
    height: $footer-height;
    text-align: justify;
    width: 100vw;
    padding: 1rem 2rem;
    &__about-us{
      grid-column: 1 / 4;
      font-size: .8rem;
    }
    &__contact {
      grid-column: 6 / 8;
      font-size: .8rem;
    }
  }
}
</style>
