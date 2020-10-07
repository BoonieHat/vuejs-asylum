<template>
  <div class="asylum-header">
  <nav>
    <div class="header-logo"><a href="/"><AsylumLogo /></a></div>
    <ul>

      <li class="item">
        <a href="/home" class="item-content <% if(typeof navbar !== 'undefined') { %><% if(navbar === 'home') {%><%='active'%><%}%><%}%>">
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
import AsylumLogo from './asylumLogo.vue'
export default {
  name: 'Header'
}
</script>

<style lang="css">
@import "../assets/styles/header.css";
</style>
