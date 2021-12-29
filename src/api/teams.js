import { BASE_URL } from "../utils/constants";

export function getTeams() {
  return fetch(`${BASE_URL}/teams/`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
  })
    .then((res) => res.json())
}

export function deleteTeam(id) {
  return fetch(`${BASE_URL}/teams/${id}`, {
    method: 'DELETE',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
  })
    .then((res) => res.json())
}

export function getTeam(id) {
  return fetch(`${BASE_URL}/teams/${id}`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
  })
    .then((res) => res.json())
}
