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

<style lang="css">
:root {
  --color-text: #fff;
  --color-muted: rgba(230, 230, 230, 0.75);

  --color-accent: #80D5FF;
  --color-accent-light: #80D5FF;
  --color-accent-opacity: rgba(32, 154, 235,0.7);

  --color-light: #475666;
  --color-light-opacity: rgb(61, 61, 61,0.4);

  --color-middle: #4C545C;

  --color-front: #2D3640;

  --color-back: #1E242B;
  --color-back-opacity: rgba(23, 23, 23,0.8);

  --color-dark: #181818;

  --shadow: 0 6px 6px 0 rgba(0,0,0,0.1);
  
  --button-primary-text: #fff;
  --button-primary-text-muted: #ebebeb;
  --button-primary-accent:#80D5FF;
  --button-primary-accent-hover: #80D5FF;
}
</style>