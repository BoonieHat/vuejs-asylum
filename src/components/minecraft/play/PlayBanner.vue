<template>
  <div class="asylumcarousel">
    <div class="asylumimg">
      <div class="margin-center">
        <div class="home-logo">
          <img src="/logo-minecraft.png"/>
        </div>
        <h3>Let's get started!</h3>
        <input class="as-button black mt1rem" href="/minecraft/play" value="asylum-minecraft.com"/>
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
  font-family: 'Inter', sans-serif;
  height: 500px;
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