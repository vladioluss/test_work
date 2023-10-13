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
      <div class="info-user">
        <p>{{ user.name }}</p>
        <div class="info-user__contact">
          <div>
            <span>email: </span><span>{{ user.email }}</span>
          </div>
          <div>
            <span>phone: </span><span>{{ user.phone }}</span>
          </div>
        </div>
        <div>
          <p>О себе</p>
          <p class="lorem">{{ LOREM }}</p>
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
    gap: 30px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */

    img {
      height: 100%;
      //width: 100%;
      max-width: 450px;
      max-height: 300px;
      border: 1px solid #E0E0E0;
    }
  }
}

.info-user {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__contact {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
    font-weight: 400;

    span:nth-last-of-type(1) {
      color: #76787D;
    }
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

.lorem {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
</style>