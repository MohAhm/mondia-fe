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
