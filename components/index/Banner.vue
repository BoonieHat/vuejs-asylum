<template>
  <div class="asylumcarousel">
    <div class="asylumimg" style="background-image: url(./testbanner.jpg)">
      <div class="marginCenter">
        <div class="home-logo">
          <AsylumLogo />
        </div>
        <h3>JOIN 185,828 OTHER UNIQUE PLAYERS</h3>
        <button class="buttonPrimary mt2rem">
          <a href="/play">PLAY NOW</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AsylumLogo from '../asylumLogo.vue'
export default {
  name: 'Banner'
}
</script>
