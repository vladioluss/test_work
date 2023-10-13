<script setup lang="ts">
import stores from "@/stores/";
import {computed, ref} from "vue";
import ResultSearchItem from "@/components/search/ResultSearchItem.vue";

let searchText = ref(null)
let result = ref([])
// Количество записей
const lenItems = computed(() => stores.getters.lenItems)
// Показывать ли запись "начните поиск"
let startSearch = true

// Поиск записей
function search() {
  startSearch = false

  const searchTextValue = searchText.value
  const isNumeric = isFinite(searchTextValue)
  // Поиск по полю id и полю username
  // Проверка на поисковое значение
  const params =
      isNumeric ?
      { id: Number(searchTextValue) } :
      { username: searchTextValue }

  stores.dispatch('getUsers', params)
      .then(() => result.value = stores.state.items.items)
      .catch(err => console.error(err))
}
</script>

<template>
  <div class="search">
    <span class="search__title">Поиск сотрудников</span>
    <input
        @change="search"
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
        v-if="!!lenItems"
    >
      <div
        class="result__search"
        v-for="item in result"
        :key="item.id"
      >
        <ResultSearchItem
          :item="item"
        />
      </div>
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
  padding-right: 20px;

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
}
</style>