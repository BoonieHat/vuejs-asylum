<template>
  <div class="asylumcarousel">
    <div class="asylumimg">
      <div class="home-logo-container">
          <div class="home-logo">
            <h2 class="asylum-name">GAMING</h2>
            <Logo />
          </div>
          <h2 class="catch-phrase">"I'M JUST A CATCH PHRASE"</h2>
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

<style lang="css" scoped>
.home-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-logo svg {
  height: 100%;
  width: 220px;
  padding-top: 5px;
  fill: var(--color-accent);
}

.home-logo-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 85px;
  z-index: 11;
}

.asylum-name {
  color: var(--color-accent);
  font-size: 56px;
  font-weight: 900;
  padding-right: 20px;
}

.catch-phrase {
  font-size: 24px;
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: 1px;
  text-align: center;
}

.asylumcarousel h1 { font-size: 68px; }
.asylumcarousel h3 { font-size: 20px; }
.asylumcarousel h3 { margin-top: 1rem; }
.asylumcarousel {
  display: flex;
  font-family: 'Inter', sans-serif;
  height: 500px;
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
  background-image: url("/pattern.png");
  background-size: cover;
  opacity: 0.2;
}
</style>
