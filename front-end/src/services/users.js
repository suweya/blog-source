import request from '../utils/request'
import { stringify } from 'qs'
import { provideFormHeaders, provideFormTokenHeaders, provideTokenHeader,
         provideJsonTokenHeader, provideJsonHeader } from '../utils/headerUtil'

export function authentication(payload) {
  return request('/api/token', {
    method: 'POST',
    headers: provideFormHeaders(),
    body: stringify({
      ...payload,
      grant_type: 'password'
    })
  })
}

export function fetchUser() {
  return request('/api/user', {
    method: 'GET',
    headers: provideTokenHeader()
  })
}

export function createUser({ userName, passWord, email }) {
  return request('/api/user', {
    method: 'POST',
    headers: provideJsonHeader(),
    body: JSON.stringify({
      userName, passWord, email
    })
  })
}

export function fetchUserDetail({ userId }) {
  return request(`/api/user/${userId}`, {
    method: 'GET',
    headers: provideTokenHeader()
  })
}
