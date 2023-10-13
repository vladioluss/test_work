<script setup lang="ts">
import stores from "@/stores/";
import {computed, ref, watch} from "vue";
import ResultSearchItem from "@/components/search/ResultSearchItem.vue";

let searchText = ref(null)
let result = ref([])
// Количество записей
const lenItems = computed(() => stores.getters.lenItems)
// Показывать ли запись "начните поиск"
let startSearch = true

let timeoutId: number;

watch(searchText, (value, oldValue) => {
  if (!value) {
    stores.commit('setItems', [])
    // stores.commit('setItem', {})
  } else {
    // Очистка предыдущего таймера, если он существует
    clearTimeout(timeoutId)
    // Установка нового таймера для вызова search() после задержки
    timeoutId = setTimeout(() => {
      search();
    }, 1000);
  }
})

// Поиск записей
function search() {
  stores.commit('setActive', true)
  startSearch = false

  // Поиск по полю id и полю username
  stores.dispatch('getUsers', searchText)
      .then(() => result.value = stores.state.items.items)
      .catch(err => console.error(err))
      .finally(() => stores.commit('setActive', false))
}
</script>

<template>
  <div class="search">
    <span class="search__title">Поиск сотрудников</span>
    <input
        v-model="searchText"
        type="text"
        placeholder="Введите Id или Username"
    >
  </div>
  <div class="result">
    <span class="result__text">Результаты</span>
    <span
        v-if="startSearch"
        class="result__search"
    >
      начните поиск
    </span>

    <div
        class="list-users"
        v-if="!!lenItems">
      <ResultSearchItem
          v-for="item in result"
          :key="item.id"
          :item="item"
      />
    </div>

    <span
        v-if="!lenItems && !startSearch"
        class="result__search"
    >
      ничего не найдено
    </span>
  </div>
</template>

<style scoped lang="scss">
.search,
.result {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.result {
  gap: 10px;
  width: 100%;
  height: 100%;
  padding-right: 20px;
  overflow-y: auto;

  &__search {
    height: 100%;
    color: #76787D;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.search {
  gap: 15px;

  input {
    width: 240px;
    height: 45px;
    padding: 16px;
    gap: 15px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid var(--all-colors-gray-gray-200, #E9ECEF);
    background: var(--all-colors-black-white-white, #FFF);
  }
}

.list-users {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 15px;
}
</style>