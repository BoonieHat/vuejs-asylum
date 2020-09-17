<template>
  <div>
    <Header />
    <Banner />
    <Content />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Banner from '~/components/index/Banner.vue'
import Content from '~/components/index/Content.vue'
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
