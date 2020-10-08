<template>
  <div class="contentRoot">
    <div class="wrapperMain">
      <div class="margin-center">
        <h1 class="headline">
          RECENT NEWS
        </h1>
        <div class="articles">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <a class="as-button primary mt2rem">
          LOAD MORE
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/index/Card.vue'

export default {
  name: 'Content',
  components: {
    Card
  }
}
</script>

<style land="css" scoped>
.articles {
  display: grid;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(3,1fr);
  width: 100%;
}

@media only screen and (max-width: 1600px) {
  .gradientOverlay {
    width: 250px;
    height: 250px;
    padding: 20px;
  }
}

@media only screen and (max-width: 1200px) {
  .gradientOverlay {
    width: 200px;
    height: 200px;
    padding: 15px;
  }
}

@media only screen and (max-width: 800px) {
  .card .gradientOverlay {
    width: 150px;
    height: 150px;
    padding: 10px;
  }
  .card .articleTitle, .card article h3 {
    font-size: 16px;
  }
  .articles {
    column-gap: 15px !important;
    row-gap: 15px !important;
  }
}

@media only screen and (max-width: 650px) {
  .articles {
    grid-template-columns: repeat(2,1fr) !important;
  }
}
</style>
