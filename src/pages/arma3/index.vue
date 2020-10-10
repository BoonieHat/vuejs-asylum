<template>
  <div>
    <Header navArma=true />
    <HeaderMiniArma />
    <Banner />
    <Content />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import HeaderMiniArma from '~/components/arma3/HeaderMini.vue'
import Banner from '~/components/arma3/Banner.vue'
import Content from '~/components/arma3/Content.vue'
export default {
  components: {
    Header,
    HeaderMiniArma,
    Banner,
    Content
  }
}
</script>

<style lang="css">
  @import "~/assets/styles/pageTheme/arma3.css"; /*Page Theme File*/
</style>

<style lang="css">
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