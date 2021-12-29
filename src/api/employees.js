import { BASE_URL } from "../utils/constants";

export function getEmployees() {
  return fetch(`${BASE_URL}/employees/`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
  })
    .then((res) => res.json())
}

export function addEmployee(data) {
  return fetch(`${BASE_URL}/employees/`, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}

export function updateEmployee(id, data) {
  return fetch(`${BASE_URL}/employees/${id}`, {
    method: 'PUT',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}

export function deleteEmployee(id) {
  return fetch(`${BASE_URL}/employees/${id}`, {
    method: 'DELETE',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
  })
    .then((res) => res.json())
}
