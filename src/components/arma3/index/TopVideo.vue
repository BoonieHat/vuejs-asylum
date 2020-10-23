<template>
  <div class="bg-media">
    <div class="asset-container"
      :style="{'filter': 'brightness(50%)'}"
      style="">
      <div class="bg-media-hero-asset is-image">
        <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" playsinline="" class="bg-video">
          <source type="video/mp4" src="/arma3/alec.mp4">
        </video>
      </div>
    </div>
    <section class="section-full">
      <div class="container">

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TopVideo',
  props: ['brightness', 'opacity', 'cardIcon', 'imageUrl', 'cardTitle', 'cardText']
}
</script>

<style lang="css" scoped>

</style>