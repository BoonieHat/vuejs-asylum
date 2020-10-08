<template>
  <div>
    <Header />
    <Banner />
    <Content />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Banner from '~/components/arma3/Banner.vue'
import Content from '~/components/arma3/Content.vue'
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
