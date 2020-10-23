<template>
  <div class="bg-media">
    <div class="asset-container"
      :style="{'filter': 'brightness('+brightness+')'}"
      style="-webkit-mask-image: -webkit-linear-gradient(top, black 40%, transparent 90%);">
      <div class="bg-media-hero-asset is-image" 
        :style="{'background-image': 'url(' + imageUrl + ')', 'opacity': opacity}">
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column desktop">
            <div class="box">
              <div class="title-and-icon">
                <span class="icon"><i :class= cardIcon></i></span>
                <h5 class="title">{{ cardTitle }}</h5>
              </div>
              <p class="subtitle">{{ cardText }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ArmaSection',
  props: ['brightness', 'opacity', 'cardIcon', 'imageUrl', 'cardTitle', 'cardText']
}
</script>

<style lang="css" scoped>

</style>