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
  --color-accent: #B3A259;
  --color-accent-light: #B3A259;
  --background-header: rgb(36, 43, 51);
  --background-image: rgb(25, 30, 36);
  --background-light: rgb(51, 61, 71);
  --background-middle: rgb(36, 43, 51);
  --background-front: rgb(23, 28, 33);
  --background-back: rgb(25, 30, 36);
  --background-footer: rgb(19, 22, 27);
  --shadow-header: 0 6px 6px 0 rgba(0,0,0,0.25);
  --shadow: 0 6px 6px 0 rgba(0,0,0,0.1);
  --button-primary-text: #fff;
  --button-primary-text-muted: #ebebeb;
  --button-primary-accent:rgb(179, 162, 89);
  --button-primary-accent-hover: #B3A259;
}
.wrapperMain {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0px 300px;
  padding-top: 300px;
  border-top: 40px solid var(--color-accent)
}
@media only screen and (max-width: 1600px) {
  .wrapperMain { 
    padding: 0px 0px !important;
    padding-top: 300px !important;
  }
}

.contentRoot {
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding-bottom: 250px;
  background: var(--background-front);
}
.contentRoot .headline {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2.5em;
  letter-spacing: 0.05em;
}
</style>
