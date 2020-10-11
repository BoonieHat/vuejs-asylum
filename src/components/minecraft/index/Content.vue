<template scoped>
  <div class="contentRoot minecraft-content">
    <div class="skyblock">
      <img src="/skyblocknew.png"/>
    </div>
    <div class="wrapperMain">
      <div class="margin-center">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style land="css" scoped>
.skyblock {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -150px;
  user-select: none;
}

.skyblock img {
  width: 225px;
}
</style>
