import { BASE_URL } from "../utils/constants";

export function getTasks() {
  return fetch(`${BASE_URL}/tasks/`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
  })
    .then((res) => res.json())
}

export function addTask(data) {
  return fetch(`${BASE_URL}/tasks/`, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}

export function updateTask(id, data) {
  return fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}

export function deleteTask(id) {
  return fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
  })
    .then((res) => res.json())
}