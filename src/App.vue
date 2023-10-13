<script setup lang="ts">
import {computed, type Component} from "vue";
import {useRoute} from "vue-router";
import MainLayout from "@/app/layouts/MainLayout.vue";

const route = useRoute()

// Все ЛейАуты
const layouts: Record<string, Component> = {
  'MainLayout': MainLayout,
}

// Определение ЛА
const layout = computed(() => {
  return layouts[`${route.meta?.layout || 'Main'}Layout`]
})
</script>

<template>
  <component :is="layout"/>
</template>
