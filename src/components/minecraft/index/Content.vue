<template scoped>
  <div class="content-root minecraft-content">
    <div class="skyblock"><img src="/skyblocknew.png"/></div>

    <div class="content-root-next">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  </div>
</template>

<script>
import Section1 from '~/components/minecraft/index/Section1.vue'
import Section2 from '~/components/minecraft/index/Section2.vue'
import Section3 from '~/components/minecraft/index/Section3.vue'
import Section4 from '~/components/minecraft/index/Section4.vue'
import Section5 from '~/components/minecraft/index/Section5.vue'
export default { 
  name: 'Content',
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
  }
}
</script>

<style land="css" scoped>
.content-root {
  font-family: 'Inter', sans-serif;
  width: 100%;
  box-shadow: 0px -20px 50px rgba(0, 0, 0, 0.15);
  background: var(--background-front);
}
.skyblock {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -150px;
  user-select: none;
  z-index: 1;
}
.skyblock img {
  width: 225px;
}
.picture-wrapper {
  padding-top: 100px;
  width: 100%;
}
.tagline h1 {
  font-size: 34px;
  margin-bottom: 1rem;
}
.tagline p {
  font-size: 20px;
}
</style>
