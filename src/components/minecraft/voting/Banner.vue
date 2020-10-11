<template>
  <div class="asylumcarousel">
    <div class="asylumimg">
      <div class="margin-center">
        <div class="home-logo">
          <img src="/logo-minecraft.png"/>
        </div>
        <h3>Help us grow by voting! And get cool rewards!</h3>
        <a class="as-button black mt1rem" href="https://minecraftservers.org/vote/595367">
          <i class="icon-button fas fa-external-link-alt"></i>Voting Site #1
        </a>
        <a class="as-button black mt1rem" href="https://minecraft-mp.com/server/269136/vote/">
          <i class="icon-button fas fa-external-link-alt"></i>Voting Site #2
        </a>
        <a class="as-button black mt1rem" href="https://minecraft-server.net/vote/asylumminecraft/">
          <i class="icon-button fas fa-external-link-alt"></i>Voting Site #3
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