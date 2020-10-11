<template>
  <footer class="footer">
    <div class="footer-header"></div>
    <div class="footer-content">
      <div class="footer-content left">
        <nav class="footer-nav">
          <ul>
            <li class="footer-nav-header">Links</li>
            <li class="footer-nav-item"><a href="/">Home</a></li>
            <li class="footer-nav-item"><a href="/">Play Now</a></li>
            <li class="footer-nav-item"><a href="/">Voting</a></li>
          </ul>
          <ul>
            <li class="footer-nav-header">Games</li>
            <li class="footer-nav-item"><a href="/arma3">Arma 3</a></li>
            <li class="footer-nav-item"><a href="/minecraft">Minecraft</a></li>
            <li class="footer-nav-item"><a href="/fivem">FiveM</a></li>
          </ul>
          <ul>
            <li class="footer-nav-header">Community</li>
            <li class="footer-nav-item"><a href="/">Forums</a></li>
            <li class="footer-nav-item"><a href="/">Teamspeak</a></li>
            <li class="footer-nav-item"><a href="/">Discord</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-content right">
        <a href="ts3.gaming-asylum.com:9216" class="as-button teamspeak">
          <i class="icon-button fab fa-teamspeak" aria-hidden="true"></i>Teamspeak
        </a>
        <a href="https://discord.gg/kbxXck9" class="as-button discord">
          <i class="icon-button fab fa-discord" aria-hidden="true"></i>Discord
        </a>
      </div>
    </div>
    <div class="footer-footer">
      <div class="footer-footer copyright">
        <p>© 2012-2020 Gaming Asylum - All rights reserved.</p>
      </div>
      <div class="footer-footer attribution">
        <p>Google Play and the Google Play logo are trademarks of Google LLC. Apple and the Apple Logo are trademarks of Apple Inc. App Store is a service mark of Apple Inc.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
@import "../assets/styles/footer.css";
</style>