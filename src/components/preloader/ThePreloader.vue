<script setup lang="ts">
</script>

<template>
  <div class="preloader">
    Загрузка...
  </div>
</template>

<style scoped lang="scss">
.preloader {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>