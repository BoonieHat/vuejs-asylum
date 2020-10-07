<template>
  <div class="contentRoot">
    <Games />
    <div class="wrapperMain">
      <div class="marginCenter">
        <h1 class="headline">
          RECENT NEWS
        </h1>
        <div class="articles">
          <Card />
        </div>
        <button class="buttonPrimary mt2rem">
          <a>LOAD MORE</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Games from '~/components/index/Games.vue'
import Card from '~/components/index/Card.vue'

export default {
  name: 'Content',
  components: {
    Card
  }
}
</script>
