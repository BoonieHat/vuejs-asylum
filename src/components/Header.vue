<template>
  <div class="asylum-header">
  <nav>
    <div class="header-logo">
      <a href="/">
        <Logo />
      </a>
    </div>
    <ul>
      <li class="item">
        <a href="/" class="item-content" v-bind:class="{ active: navHome }">
          <div class="label">
            <div class="label-content">
              <span class="name">Home</span> 
            </div>
          </div>
        </a>
      </li>

      <li class="item">
        <a href="/arma3" class="item-content" v-bind:class="{ active: navArma }">
          <div class="label">
            <div class="label-content">
              <span class="name">Arma 3</span> 
            </div>
          </div>
        </a>
      </li>

      <li class="item">
        <a href="/minecraft" class="item-content" v-bind:class="{ active: navMinecraft }">
          <div class="label">
            <div class="label-content">
              <span class="name">Minecraft</span> 
            </div>
          </div>
        </a>
      </li>
      <!--
      <li class="item">
        <a href="/fivem" class="item-content" v-bind:class="{ active: navFivem }">
          <div class="label">
            <div class="label-content">
              <span class="name">FiveM</span> 
            </div>
          </div>
        </a>
      </li>
      -->

      <li class="item">
        <a href="https://gaming-asylum.com/forums" rel="noreferrer noopener" class="item-content">
          <div class="label">
            <div class="label-content">
              <span class="name">Forums</span> 
            </div>
          </div>
        </a>
      </li>

    </ul>

    <div style="margin-left: auto;" class="asylum-login-item">
      <a href="/minecraft/play" aria-label="Play Now" class="asylum-login-button primary item-content">
        <span class="asylum-login-button-icon"><i class="fas fa-play"></i></span>
        Play Now
      </a>
      <a href="ts3server://ts3.gaming-asylum.com:9216" aria-label="Teamspeak" class="asylum-login-button teamspeak item-content">
        <span class="asylum-login-button-icon"><i class="fab fa-teamspeak"></i></span>
        Teamspeak
      </a>
      <a href="https://discord.gg/kbxXck9" aria-label="Discord" class="asylum-login-button discord item-content">
        <span class="asylum-login-button-icon"><i class="fab fa-discord"></i></span>
        Discord
      </a>
    </div>
  </nav>
</div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: 'Header',
  props: ['navHome', 'navArma', 'navMinecraft', 'navFivem']
}
</script>

<style lang="css">

.asylum-login-item {
  display: flex;
  position: relative;
  cursor: pointer;
  line-height: 0;
  min-width: 0;
}

.asylum-login-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem 1rem;
}

.asylum-login-button.teamspeak {
color: var(--button-primary-text-muted);
  background: var(--media-teamspeak);
}

.asylum-login-button.discord {
  color: var(--button-primary-text-muted);
  background: var(--media-discord);
}

.asylum-login-button:hover {
  text-decoration: none !important;
}

.asylum-login-button-icon {
  font-size: 18px;
  padding-right: 10px;
}


.asylum-header {
  background: var(--background-header);
  position: relative;
  position: -webkit-sticky;
  position: sticky;
  transform: translateZ(0);
  top: 0;
  left: 0;
  z-index: 100;
  user-select: none;
  width: 100%;
  min-width: 100%;
  height: 60px;
  box-shadow: var(--shadow-header);
}

.asylum-header nav {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
}

.header-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem 1.25rem;
}
.header-logo svg {
  height: 30px;
  width: 100px;
  fill: var(--color-text);
}

.asylum-header .item .item-content.active .label .name {
  color: var(--color-text) !important;
}

.asylum-header .item .item-content.active {
  border-bottom: 3px solid var(--color-accent) !important;
}

.asylum-header .item .item-content {
  border-bottom: 3px solid transparent;
}

.asylum-header .item .item-content:hover .label .name {
  color: var(--color-text) !important;
}

.asylum-header .item .item-content:hover {
  border-bottom: 3px solid var(--background-light);
  background: var(--background-back);
}


.asylum-header .item .item-content .label .name {
  color: var(--color-muted);
}

.asylum-header .item a{
  flex: 1;
  display: flex;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
}

.asylum-header .item .item-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem .75rem;
}

.asylum-header .item {
  display: flex;
  position: relative;
  cursor: pointer;
  line-height: 0;
  min-width: 0;
}

.asylum-wrapper {
  display: flex;
  flex: 1;
  position: relative;
  top: 0;
  flex-direction: column;
}

.asylum-header nav>ul li {
  list-style: none;
}

.asylum-header ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 1000px) {
  .header-logo {
    display: none;
  }
  .asylum-header .item .item-content {
    padding: .25rem .45rem;
  }
}

@media only screen and (max-width: 790px) {
  .asylum-login-button.primary,
  .asylum-login-button.teamspeak {
    display: none;
  }
}

@media only screen and (max-width: 500px) {
  .asylum-login-button {
    display: none;
  }
  .asylum-header-mini .item,
  .asylum-header .item {
    font-size: 14px !important;
  }
  .asylum-header .item .item-content {
    padding: .25rem .45rem;
  }
}

</style>
