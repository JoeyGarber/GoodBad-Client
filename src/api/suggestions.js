import apiUrl from '../apiConfig'
import axios from 'axios'

export const createSuggestion = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/suggestions/',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      suggestion: {
        title: data.title
      }
    }
  })
}

export const indexSuggestions = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/suggestions/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showSuggestion = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/suggestions/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateSuggestion = (id, data, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/suggestions/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    // I could also feed in the whole data object, like task: data, but then if I send it a data object with more keys it won't work
    // But also I don't know when I would do that anyway
    data: {
      suggestion: {
        title: data.title
      }
    }
  })
}

export const deleteTask = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/suggestions/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
