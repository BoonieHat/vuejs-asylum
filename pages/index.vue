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

<style lang="css">
:root {
  --color-text: #fff;
  --color-muted: rgba(230, 230, 230, 0.75);

  --color-accent: #209aeb;
  --color-accent-light: #36a3eb;
  --color-accent-opacity: rgba(32, 154, 235,0.7);

  --color-light: #2c2c2c;
  --color-light-opacity: rgb(61, 61, 61,0.4);

  --color-middle: #4C545C;

  --color-front: #252525;

  --color-back: #202020;
  --color-back-opacity: rgba(23, 23, 23,0.8);

  --color-dark: #181818;

  --shadow: 0 6px 6px 0 rgba(0,0,0,0.1);
  
  --button-primary-text: #fff;
  --button-primary-text-muted: #ebebeb;
  --button-primary-accent:#1480c8;
  --button-primary-accent-hover: #209aeb;
}
</style>
