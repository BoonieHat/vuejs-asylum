<template>
  <div class="header">
    <div class="headerContainer">
      <div class="headerLogo">
        <a href="/">
          <img src="../assets/images/logowhite.png" style="width: 150px"></img>
        </a>
      </div>

      <button class="buttonHeader">
        <a href="/play">PLAY NOW</a>
      </button>

      <button class="buttonHeader">
        <a href="/store">STORE</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import "../assets/styles/header.scss";
</style>
