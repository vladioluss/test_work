<script setup lang="ts">
import TheHeader from "@/components/app/TheHeader.vue";
import TheSidebar from "@/components/app/TheSidebar.vue";
</script>

<template>
  <TheHeader/>
  <main>
    <TheSidebar/>
    <div class="content-wrapper">
      <router-view :key="$route.fullPath"/>
    </div>
  </main>
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
</style>