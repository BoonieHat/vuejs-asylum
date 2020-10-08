<template>
  <div>
    <Header />
    <Banner />
    <Content />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Banner from '~/components/fivem/Banner.vue'
import Content from '~/components/fivem/Content.vue'
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
