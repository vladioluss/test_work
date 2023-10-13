import axios from "axios";


const apiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  }
})

/** Получение всех или определенного элемента */
export function getItems(url: string, params: object = {}) {
  return apiInstance.get(url, { params: params })
}
