<template>
  <div class="asylum-header-mini">
  <nav>
    <ul>

      <li class="item">
        <a href="/minecraft" class="item-content active">
          <div class="label">
            <div class="label-content">
              <span class="name">Home</span> 
            </div>
          </div>
        </a>
      </li>

      <li class="item">
        <a href="/minecraft/play" class="item-content">
          <div class="label">
            <div class="label-content">
              <span class="name">Play Now</span> 
            </div>
          </div>
        </a>
      </li>

      <li class="item">
        <a href="/minecraft" class="item-content">
          <div class="label">
            <div class="label-content">
              <span class="name">Support</span> 
            </div>
          </div>
        </a>
      </li>

      <li class="item">
        <a href="/minecraft/voting" class="item-content">
          <div class="label">
            <div class="label-content">
              <span class="name">Voting</span> 
            </div>
          </div>
        </a>
      </li>

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
  </nav>
</div>
</template>

<script>
import Logo from '../Logo.vue'
export default {
  name: 'Header'
}
</script>

<style lang="css">
.asylum-header-mini {
  background: var(--background-back);
  z-index: 99;
  user-select: none;
  width: 100%;
  min-width: 100%;
  height: 40px;
  box-shadow: var(--shadow-header);
}

.asylum-header-mini nav {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
}


.asylum-header-mini .item .item-content.active .label .name {
  color: var(--color-text) !important;
}

.asylum-header-mini .item .item-content.active {
  border-bottom: 3px solid var(--color-accent) !important;
}

.asylum-header-mini .item .item-content {
  border-bottom: 3px solid transparent;
}

.asylum-header-mini .item .item-content:hover .label .name {
  color: var(--color-text) !important;
}

.asylum-header .item .item-content:hover {
  border-bottom: 3px solid var(--background-light);
  background: var(--background-back);
}


.asylum-header-mini .item .item-content .label .name {
  color: var(--color-muted);
}

.asylum-header-mini .item a{
  flex: 1;
  display: flex;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
}

.asylum-header-mini .item .item-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem .75rem;
}

.asylum-header-mini .item {
  display: flex;
  position: relative;
  cursor: pointer;
  line-height: 0;
  min-width: 0;
}

.asylum-header-mini nav>ul li {
  list-style: none;
}

.asylum-header-mini ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}
</style>