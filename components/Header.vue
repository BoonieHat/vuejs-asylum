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
        <a href="/" class="item-content">
          <div class="label">
            <div class="label-content">
              <span class="name">Home</span> 
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
import Logo from './Logo.vue'
export default {
  name: 'Header'
}
</script>

<style lang="css">
.asylum-header {
  background: var(--color-front);
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
  box-shadow: var(--shadow);
}

.asylum-header nav {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
}

.header-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .75rem 1.25rem;
}
.header-logo svg {
  height: 30px;
  width: 140px;
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

.asylum-header .item .item-content:hover {
  color: var(--color-text) !important;
  border-bottom: 3px solid var(--color-light);
  background: var(--color-light);
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
</style>
