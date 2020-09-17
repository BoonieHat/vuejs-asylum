<template>
  <div class="card" style="background-image: ">
    <a href="props.link">
      <div class="gradientOverlay">
        <h3 class="articleTitle" alt="">
          {props.headline}
        </h3>

        <article class="mtAuto}">
          <h3 alt="">
            {props.type}
          </h3>
          <h3 alt="">
            {props.date}
          </h3>
        </article>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style>
@import "~/assets/styles/card.css";
</style>
