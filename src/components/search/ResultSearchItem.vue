<script setup lang="ts">
import stores from "@/stores";


defineProps({
  item: {
    type: Object,
    default: {},
  }
})

// ПОдробный просмотр профиля
function viewProfile(id: number) {
  stores.dispatch('getUsers', id)
      .then(res => stores.commit('setItem', res))
}
</script>

<template>
  <div
      class="item"
      @click="viewProfile(item.id)"
  >
    <div>
      <img class="img" src="@/app/assets/icons/noPhoto.png" alt="">
    </div>
    <div class="item__info">
      <p class="username">{{ item.username }}</p>
      <p class="email">{{ item.email }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 70px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  flex-direction: row;
  font-style: normal;
  line-height: normal;
  font-size: 14px;

  &:hover {
    cursor: pointer;

    .item__info {
      background: #E0E0E0;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  .img {
    max-width: 70px;
    max-height: 70px;
    width: 100%;
    height: 100%;
  }

  &__info {
    padding: 0 10px;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .username {
    color: #333;
    font-weight: 600;
  }

  .email {
    color: #76787D;
    font-weight: 400;
  }
}
</style>