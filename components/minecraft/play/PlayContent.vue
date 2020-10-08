<template scoped>
  <div class="content-root minecraft-content">
    <div class="wrapper-main">
      <div class="margin-center">
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
.minecraft-content::before {
  width: 100%;
  height: 100%;
  position: absolute;
  content: "";
  background-image: url("/minecraft-content.png");
  background-size: 25%;
  opacity: 0.25;
}
.content-root {
  min-height: 100vh !important;
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding-bottom: 250px;
  box-shadow: 0px -20px 50px rgba(0, 0, 0, 0.15);
  background: var(--background-front);
}
.wrapper-main {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0px 300px;
  padding-top: 50px;
}
@media only screen and (max-width: 1600px) {
  .wrapper-main { 
    padding: 0px 0px !important;
    padding-top: 50px !important;
  }
}
</style>
