import axios from "axios";
import stores from "@/stores";


const apiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  }
})

// Добавляем перехват ответов
apiInstance.interceptors.response.use(function (response) {
  // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
  return response
}, function (error) {
  // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
  // Записываем ошибку в стор
  stores.commit('setError', error)
  return Promise.reject(error)
})


/** Получение всех или определенного элемента */
export function getItems(url: string, params: object = {}) {
  return apiInstance.get(url, { params: params })
}
