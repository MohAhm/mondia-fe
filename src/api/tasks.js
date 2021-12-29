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