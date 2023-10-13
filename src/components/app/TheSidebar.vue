<script setup lang="ts">
import Search from "@/components/search/Search.vue";
</script>

<template>
  <div class="sidebar-wrapper">
    <Search/>
  </div>
</template>

<style scoped lang="scss">
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sidebar-wrapper {
  padding: 15px 0 0 20px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  gap: 20px;
  border-right: 1px solid #E0E0E0;
}
</style>