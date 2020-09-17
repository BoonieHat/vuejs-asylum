<template>
  <div class="header">
    <div class="headerContainer">
      <div class="headerLogo">
        <a href="/">
          <img src="../assets/images/logo.png" style="width: 150px"></img>
        </a>
      </div>

      <button class="buttonHeader">
        <a href="/play">
          <a>PLAY NOW</a>
        </a>
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
