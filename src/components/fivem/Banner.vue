<template>
  <div class="asylumcarousel">
    <div class="asylumimg">
      <div class="margin-center">
        <div class="home-logo">
          <Logo />
        </div>
        <h3>JOIN 185,828 OTHER UNIQUE PLAYERS</h3>
        <a class="as-button teamspeak mt2rem" href="/play">Teamspeak</a>
        <a class="as-button discord mt2rem" href="/play">Discord</a>
        <a class="as-button primary mt2rem" href="/play">Forums</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../Logo.vue'
export default {
  name: 'Banner'
}
</script>

<style lang="css">
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

.asylumimg::before {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  content: "";
  background-image: url("/fivem.jpg");
  background-size: cover;
  opacity: 0.4;
}
</style>
