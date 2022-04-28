<template lang="pug">
  NuxtLink.logo(to='/') 
</template>
<script>
export default {
  name: "Logo",
}
</script>

<style lang="scss">
.logo {
  background: url("http://eldemocrata.mx/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  grid-column: 1 / 13;
  height: $mobil-header-height * 0.7;
}

@media only screen and (min-width: $tablets-width) {
}

@media only screen and (min-width: $pc-width) {
  .logo {
    height: $header-height * 0.7;
  }
}
</style>
