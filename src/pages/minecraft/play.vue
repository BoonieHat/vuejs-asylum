<template>
  <div>
    <Header navMinecraft=true />
    <HeaderMiniMinecraft navMinecraftPlay=true />
    <Banner />
    <Content />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import HeaderMiniMinecraft from '~/components/minecraft/HeaderMini.vue'
import Banner from '~/components/minecraft/play/PlayBanner.vue'
import Content from '~/components/minecraft/play/PlayContent.vue'
export default {
  components: {
    Header,
    HeaderMiniMinecraft,
    Banner,
    Content
  }
}
</script>

<style lang="css">
  @import "~/assets/styles/pageTheme/minecraft.css"; /*Page Theme File*/
</style>

<style lang="css">
.home-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-logo svg {
  height: 60px;
  fill: var(--color-text);
}
</style>