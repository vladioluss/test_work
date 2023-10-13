<script setup lang="ts">
import stores from "../../stores";
import {computed} from "vue";


let user = computed(() => stores.state.items.item)

// Проверяем на пустоту данные из стора
const isExists = computed(() => Object.keys(user.value).length)

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam mollitia\n' +
    'perspiciatis placeat quaerat quia vitae. Aspernatur debitis earum eos,\n' +
    'eveniet hic labore molestias, omnis quasi, quia repellendus rerum tempora.'

// let image = ref(null)
/*async function profileImg(img: string) {
  try {
    image.value = await import(`@/app/assets/icons/${img}`)
  } catch (error) {
    image.value = await import(`@/app/assets/icons/noPhoto.png`)
  }
}*/
</script>

<template>
  <div class="block">
    <p
        class="no-data"
        v-if="!isExists"
    >
      Выберите сотрудника, чтобы посмотреть его профиль
    </p>
    <div
        class="block__info"
        v-else
    >
      <div>
        <img src="@/app/assets/icons/noPhoto.png" alt="noPhoto">
      </div>
      <div>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.phone }}</p>
        <div>
          <p>О себе</p>
          <p>{{ LOREM }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.block {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  &__info {
    display: flex;
    flex-direction: row;
    padding: 30px;
  }
}

.no-data {
  height: 100%;
  width: 100%;
  color: #76787D;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>