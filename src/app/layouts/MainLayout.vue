<script setup lang="ts">
import TheHeader from "@/components/app/TheHeader.vue";
import TheSidebar from "@/components/app/TheSidebar.vue";
import stores from "@/stores";
import ThePreloader from "@/components/preloader/ThePreloader.vue";
</script>

<template>
  <TheHeader/>
  <main>
    <TheSidebar/>
    <div class="content-wrapper">
      <router-view :key="$route.fullPath"/>
    </div>
  </main>

  <!--  Прелоадер-->
  <ThePreloader v-if="stores.state.preloader.active"/>

  <!--  Вывод экрана ошибок-->
  <div
      class="error"
      v-if="!!stores.state.errors.error"
  >
    <div class="error__block">
      <h3
          class="close"
          @click="stores.commit('setError', '')"
      >
        Закрыть
      </h3>
      <h2>Ошибка сервера</h2>
      <p>{{ stores.state.errors.error }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
main {
  height: calc(100vh - 160px);
  margin: 0 50px;
  border-radius: 10px;
  background: #FDFDFD;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: row;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.error {
  background: #C09C5AFF;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  span,
  h2 {
    z-index: 10000;
    color: black;
  }
}

.close {
  position: absolute;
  right: 30px;
  top: 30px;
  border: #181818 1px solid;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #ffcc71;
  }
}
</style>