<template scoped>
  <div class="content-root minecraft-content">
    <div class="content-root-next">
      <ArmaSection 
        brightness="100%" 
        opacity="0.25" 
        imageUrl="./arma3/section1.jpg" 
        cardIcon="fas fa-envelope" 
        cardTitle="Join Gangs" 
        cardText="Want to work with the criminal underworld and take over the island? Join a gang."
      />
      <ArmaSection 
        brightness="100%" 
        opacity="0.25" 
        imageUrl="./arma3/section1.jpg" 
        cardIcon="fas fa-envelope" 
        cardTitle="Join Fire Deptartment" 
        cardText="Want to work with the criminal underworld and take over the island? Join a gang."
      />
      <ArmaSection 
        brightness="100%" 
        opacity="0.25" 
        imageUrl="./arma3/section1.jpg" 
        cardIcon="fas fa-envelope" 
        cardTitle="Join Police Deptartment" 
        cardText="Want to work with the criminal underworld and take over the island? Join a gang."
      />
      <ArmaSection 
        brightness="100%" 
        opacity="0.25" 
        imageUrl="./arma3/section2.jpg" 
        cardIcon="fas fa-wallet" 
        cardTitle="Control Cartels" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <ArmaSection 
        brightness="100%" 
        opacity="0.25" 
        imageUrl="./arma3/section3.jpg" 
        cardIcon="fas fa-question" 
        cardTitle="Bank Heists" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <ArmaSection 
        brightness="100%" 
        opacity="0.25" 
        imageUrl="./arma3/section4.jpg" 
        cardIcon="fas fa-layer-group" 
        cardTitle="Prison Breaks" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <ArmaSection 
        brightness="100%" 
        opacity="0.25" 
        imageUrl="./arma3/section5.jpg" 
        cardIcon="fas fa-gem" 
        cardTitle="Federal Reserve Robbery" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <ArmaSection 
        brightness="100%" 
        opacity="0.25" 
        imageUrl="./arma3/section6.jpg" 
        cardIcon="fas fa-gem" 
        cardTitle="Raid Evidence Lockup" 
        cardText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
    </div>
  </div>
</template>

<script>
import ArmaSection from '~/components/arma3/index/Section.vue'
export default { 
  name: 'Content',
  components: {
    ArmaSection
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