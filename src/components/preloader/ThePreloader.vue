<script setup lang="ts">
import { ref } from 'vue';
const loading = ref(true);

setTimeout(() => {
  loading.value = false
}, 2000)
</script>

<template>
  <div>
    <!-- Прелоадер -->
    <div v-if="loading" class="preloader">
      Загрузка...
    </div>
  </div>
</template>

<style scoped lang="scss">
.preloader {
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