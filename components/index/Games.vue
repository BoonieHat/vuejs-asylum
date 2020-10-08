<template>
  <div class="asylum-move-up">
    <div class="asylum-between-home-wrapper">
      <div class="marginCenter">
        <h1 class="server-header">OUR SERVERS</h1>
        <div class="asylum-between-home">
          <div class="game-card" style="background-image: url(/arma3.jpg) ">
            <a href="/arma3">
              <div class="game-overlay game-overlay-arma3">
                <h3 class="game-title" alt="">
                  Arma 3
                </h3>
              </div>
            </a>
          </div>

          <div class="game-card" style="background-image: url(/minecraft.jpg) ">
            <a href="/minecraft">
              <div class="game-overlay game-overlay-minecraft">
                <h3 class="game-title" alt="">
                  Minecraft
                </h3>
              </div>
            </a>
          </div>

          <div class="game-card" style="background-image: url(/fivem.jpg) ">
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
.server-header {
  font-size: 36px;
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 2rem;
}

.asylum-between-home {
  display: grid;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-columns: repeat(3,1fr);
  width: 100%;
}

.asylum-move-up {
  margin-top: -140px;
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
  border-radius: 10px;
}
.game-card {
  font-family: 'Inter', sans-serif;
  transition: 0.5s;
  background: #111;
  grid-column-start: auto;
  grid-row-start: auto;

  background-size: 300%;
}

.game-card:hover {
  background-size: 400%;
  transition: 0.5s;
  -webkit-transform: translateY(-1em);
          transform: translateY(-1em);
}

.game-card:hover .game-title {
  font-size: 30px;
  opacity: 1;
  transition: 0.5s;
}

.game-card a {
  text-decoration: none;
}

.game-card .game-title {
  font-size: 26px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  opacity: 0.9;
  transition: 0.5s;
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
   rgba(46, 77, 105, 0.4) 0%,
   rgba(46, 77, 105,1) 25%, 
   rgba(46, 77, 105,1) 75%,
   rgba(46, 77, 105,0.4) 100%);
  box-shadow: 0px 5px 20px rgba(46, 77, 105, 0.4);
}

.game-overlay-arma3:hover {
  box-shadow: 0px -5px 10px rgba(46, 77, 105, 0.6);
}

.game-overlay-minecraft {
  background-image: linear-gradient(to bottom,
   rgba(16, 190, 54, 0.5) 0%,
   rgba(16, 190, 54,1) 25%, 
   rgba(16, 190, 54,1) 75%,
   rgba(16, 190, 54,0.5) 100%);
  box-shadow: 0px 5px 20px rgba(16, 190, 54, 0.4);
}
.game-overlay-minecraft:hover {
  box-shadow: 0px -5px 10px rgba(16, 190, 54, 0.6);
}

.game-overlay-fivem {
  background-image: linear-gradient(to bottom,
   rgba(255, 180, 92, 0.5) 0%,
   rgba(255, 180, 92,1) 25%, 
   rgba(255, 180, 92,1) 75%,
   rgba(255, 180, 92,0.6) 100%);
  box-shadow: 0px 5px 20px rgba(255, 180, 92, 0.4);
}
.game-overlay-fivem:hover {
  box-shadow: 0px -5px 10px rgba(255, 180, 92, 0.6);
}
</style>
