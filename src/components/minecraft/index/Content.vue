<template scoped>
  <div class="content-root minecraft-content">
    <div class="skyblock"><img src="/skyblocknew.png"/></div>

    <div class="content-root-next">
      <Section 
        brightness="100%" 
        opacity="0.15" 
        imageUrl="./section1.jpg" 
        cardIcon="fas fa-envelope" 
        cardTitle="Invite Your Friends!" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Section 
        brightness="100%" 
        opacity="0.15" 
        imageUrl="./section2.jpg" 
        cardIcon="fas fa-wallet" 
        cardTitle="Make Money" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Section 
        brightness="100%" 
        opacity="0.15" 
        imageUrl="./section3.jpg" 
        cardIcon="fas fa-question" 
        cardTitle="Missions" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Section 
        brightness="100%" 
        opacity="0.15" 
        imageUrl="./section4.jpg" 
        cardIcon="fas fa-layer-group" 
        cardTitle="Grow your Island" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Section 
        brightness="100%" 
        opacity="0.15" 
        imageUrl="./section5.jpg" 
        cardIcon="fas fa-gem" 
        cardTitle="Fight for rare rewards" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
    </div>
  </div>
</template>

<script>
import Section from '~/components/minecraft/index/Section.vue'
export default { 
  name: 'Content',
  components: {
    Section
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
