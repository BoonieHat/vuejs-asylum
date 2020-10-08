<template>
  <div class="asylumcarousel">
    <div class="asylumimg">
      <div class="margin-center">
        <div class="home-logo">
          <img src="/logo-minecraft.png"/>
        </div>
        <h3>A FUN MINECRAFT SKYBLOCK EXPERIENCE!</h3>
        <a class="as-button primary mt1rem" href="/minecraft/play">
          <i class="icon-button fas fa-play"></i>PLAY NOW
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="css" scoped>
.asylumcarousel h1 { font-size: 68px; }
.asylumcarousel h3 { font-size: 20px; }
.asylumcarousel h3 { margin-top: 1rem; }
.asylumcarousel {
  display: flex;
  font-family: 'Inter', sans-serif;
  height: 400px;
  background: var(--background-image);
  color: #fff;
}

.asylumcarousel .asylumimg {
  width: 100%;
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
  width: 350px;
}

.asylumimg::before {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  content: "";
  background-image: url("/minecraft.jpg");
  background-size: cover;
  opacity: 0.4;
}
</style>
