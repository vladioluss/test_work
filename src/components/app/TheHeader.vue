<script setup lang="ts">
import {ref} from "vue";
import auth from "@/stores/modules/auth";


const user = ref(auth.getters.username(auth.state))
</script>

<template>
  <header>
    <div class="header">
      <span class="header__logo">Жилфонд</span>
      <span class="header__user">{{ user }}</span>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  padding: 50px 50px 0 50px;

  .header {
    font-style: normal;
    line-height: normal;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    &__logo {
      color: #E31F24;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    &__user {
      color: #333;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
</style>