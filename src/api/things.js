import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexThings = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/things/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showThing = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/things/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const voteThing = (id, direction, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/things/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      vote: direction
    }
  })
}
