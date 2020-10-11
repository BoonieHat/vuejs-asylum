<template>
  <div>
    <Header navHome=true />
    <Banner />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Banner from '~/components/index/Banner.vue'
import Content from '~/components/index/Content.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Banner,
    Content
  }
}
</script>

<style lang="css">
  @import "~/assets/styles/pageTheme/home.css"; /*Page Theme File*/
</style>

<style lang="css">
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
