<template>
  <div class="asylumcarousel">
    <div class="asylumimg">
      <div class="margin-center">
        <div class="home-logo">
          <img src="/logo-minecraft.png"/>
        </div>
        <h3>A FUN MINECRAFT SKYBLOCK EXPERIENCE!</h3>
        <a class="as-button black mt1rem" href="/minecraft/play">
          <i class="icon-button fas fa-play"></i>PLAY NOW
        </a>
      </div>
    </div>
    <div class="banner-top">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="css" scoped>
.banner-top {
  width: 100%;
  height: 126px;
  margin-top: -126px;
  background-repeat: repeat-x!important;
  background-image: url("/mcsvg.png");
}
.asylumcarousel h1 { font-size: 68px; }
.asylumcarousel h3 { font-size: 20px; }
.asylumcarousel h3 { margin-top: 1rem; }
.asylumcarousel {
  height: 500px;
  font-family: 'Inter', sans-serif;
  background: var(--background-image);
  color: #fff;
}

.asylumcarousel .asylumimg {
  width: 100%;
  height: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
  background-position-x: center;
}

.home-logo img {
  width: 300px;
}
</style>
