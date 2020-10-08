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
  --color-accent: #2B9FEA;
  --color-accent-light: #2B9FEA;

  --background-header: #1F1F1F;
  --background-image: linear-gradient(0deg, rgba(23, 28, 33,1) 0%, rgba(25, 30, 36,1) 100%);
  --background-light: #3D3D3D;
  --background-middle: #3D3D3D;
  --background-front: #171717;
  --background-back: #171717;
  --background-footer: #171717;

  --shadow-header: 0 6px 6px 0 rgba(0,0,0,0.1);

  --shadow: 0 6px 6px 0 rgba(0,0,0,0.1);
  
  --button-primary-text: #fff;
  --button-primary-text-muted: #ebebeb;
  --button-primary-accent:#2B9FEA;
  --button-primary-accent-hover: #2B9FEA;
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
  padding-top: 300px;
}
@media only screen and (max-width: 1600px) {
  .wrapperMain { 
    padding: 0px 0px !important;
    padding-top: 300px !important;
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