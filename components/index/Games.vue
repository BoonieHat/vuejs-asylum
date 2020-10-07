<template>
  <div class="asylum-move-up">
    <div class="asylum-between-home-wrapper">
      <div class="marginCenter">
        <div class="asylum-between-home">
          <div class="game-card" style="background-image: url(https://arma3.com/assets/img/wallpapers/tacops/2/Arma%203%20Tac-Ops_wallpaper_1080x1920.jpg) ">
            <a href="props.link">
              <div class="game-overlay game-overlay-arma3">
                <h3 class="game-title" alt="">
                  ArmA 3
                </h3>
              </div>
            </a>
          </div>

          <div class="game-card" style="background-image: url(https://liveatpc.com/wp-content/uploads/2020/04/EVM3jwsUEAI-MXR.jpg) ">
            <a href="props.link">
              <div class="game-overlay game-overlay-minecraft">
                <h3 class="game-title" alt="">
                  Minecraft
                </h3>
              </div>
            </a>
          </div>

          <div class="game-card" style="background-image: url(https://forum.fivem.net/uploads/default/original/3X/5/a/5a204c8cf38461cb641dc2ade6e8d58747e3f833.jpeg) ">
            <a href="props.link">
              <div class="game-overlay game-overlay-fivem">
                <h3 class="game-title" alt="">
                  FiveM
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/index/Card.vue'
export default {
  name: 'Games'
}
</script>