<template>
  <div>
    <Header />
    <Banner />
    <Content />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Banner from '~/components/minecraft/Banner.vue'
import Content from '~/components/minecraft/Content.vue'
export default {
  components: {
    Header,
    Banner,
    Content
  }
}
</script>

<style>
</style>
