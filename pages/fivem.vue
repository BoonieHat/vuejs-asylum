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

<style lang="css">
:root {
  --color-text: #fff;
  --color-muted: rgba(230, 230, 230, 0.75);
  --color-accent: #F68B40;
  --color-accent-light: #F68B40;

  --background-header: #111111;
  --background-image: linear-gradient(0deg, rgba(23, 28, 33,1) 0%, rgba(25, 30, 36,1) 100%);
  --background-light: #4B535A;
  --background-middle: #4B535A;
  --background-front: #111111;
  --background-back: #111111;
  --background-footer: #111111;

  --shadow-header: 0 6px 6px 0 rgba(0,0,0,0.4);

  --shadow: 0 6px 6px 0 rgba(0,0,0,0.1);
  
  --button-primary-text: #fff;
  --button-primary-text-muted: #ebebeb;
  --button-primary-accent: #F68B40;
  --button-primary-accent-hover: #F68B40;
}

.home-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-logo svg {
  height: 60px;
  fill: var(--color-text);
}
.wrapperMain {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0px 300px;
  padding-top: 50px;
}
@media only screen and (max-width: 1600px) {
  .wrapperMain { 
    padding: 0px 0px !important;
    padding-top: 50px !important;
  }
}
.marginCenter {
  text-align: center;
  margin: auto;
  position: relative;
}

.contentRoot {
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding-bottom: 250px;
  box-shadow: 0px -20px 50px rgba(0, 0, 0, 0.15);
  background: var(--background-front);
}
.contentRoot .headline {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2.5em;
  letter-spacing: 0.05em;
}
</style>
