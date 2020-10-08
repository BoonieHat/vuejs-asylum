<template>
  <div class="asylum-move-up">
    <div class="asylum-between-home-wrapper">
      <div class="marginCenter">
        <div class="asylum-between-home">
          <div class="game-card" style="background-image: url(https://arma3.com/assets/img/wallpapers/tacops/2/Arma%203%20Tac-Ops_wallpaper_1080x1920.jpg) ">
            <a href="/arma3">
              <div class="game-overlay game-overlay-arma3">
                <h3 class="game-title" alt="">
                  ArmA 3
                </h3>
              </div>
            </a>
          </div>

          <div class="game-card" style="background-image: url(https://liveatpc.com/wp-content/uploads/2020/04/EVM3jwsUEAI-MXR.jpg) ">
            <a href="/minecraft">
              <div class="game-overlay game-overlay-minecraft">
                <h3 class="game-title" alt="">
                  Minecraft
                </h3>
              </div>
            </a>
          </div>

          <div class="game-card" style="background-image: url(https://forum.fivem.net/uploads/default/original/3X/5/a/5a204c8cf38461cb641dc2ade6e8d58747e3f833.jpeg) ">
            <a href="/fivem">
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
export default {
  name: 'Games'
}
</script>

<style lang="css">
.asylum-between-home {
  display: grid;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(3,1fr);
  width: 100%;
}

.asylum-move-up {
  margin-top: -60px;
  position: absolute;
  width: 100%;
}

.asylum-between-home-wrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.game-card,
.game-overlay {
  min-height: 275px;
  min-width: 225px;
  border-radius: 5px;
}
.game-card {
  font-family: 'Inter', sans-serif;
  transition: 0.5s;
  background: #111;
  grid-column-start: auto;
  grid-row-start: auto;
  background-size: 150%;
}

.game-card:hover {
  background-size: 300%;
  transition: 0.5s;
}

.game-card a {
  text-decoration: none;
}

.game-card .game-title {
  font-size: 26px;
  font-weight: 700;
  display: flex;
  justify-content: center;
}

.game-overlay {
  cursor: pointer;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background-size: 100% 400%;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  z-index: 10;
}

.game-overlay:hover {
  background-position: 0 100%;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.game-overlay:hover h3 {
  opacity: 1;
}

.game-overlay-arma3 {
  background-image: linear-gradient(to bottom,
   rgba(16, 179, 190, 0.3) 0%,
   rgba(16, 179, 190,0.8) 25%, 
   rgba(16, 179, 190,0.8) 75%,
   rgba(16, 179, 190,0.3) 100%);
  box-shadow: 0px 5px 10px rgba(70, 233, 233, 0.2);
}
.game-overlay-arma3:hover {
  box-shadow: 0px 5px 10px rgba(70, 233, 233, 0.6);
}

.game-overlay-minecraft {
  background-image: linear-gradient(to bottom,
   rgba(16, 190, 54, 0.3) 0%,
   rgba(16, 190, 54,0.8) 25%, 
   rgba(16, 190, 54,0.8) 75%,
   rgba(16, 190, 54,0.3) 100%);
  box-shadow: 0px 5px 10px rgba(16, 190, 54, 0.2);
}
.game-overlay-minecraft:hover {
  box-shadow: 0px 5px 10px rgba(16, 190, 54, 0.6);
}

.game-overlay-fivem {
  background-image: linear-gradient(to bottom,
   rgba(255, 180, 92, 0.3) 0%,
   rgba(255, 180, 92,0.8) 25%, 
   rgba(255, 180, 92,0.8) 75%,
   rgba(255, 180, 92,0.3) 100%);
  box-shadow: 0px 5px 10px rgba(255, 180, 92, 0.2);
}
.game-overlay-fivem:hover {
  box-shadow: 0px 5px 10px rgba(255, 180, 92, 0.6);
}
</style>
