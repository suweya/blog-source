import { LOCAL_STORAGE_TOKEN_KEY } from '../constants/constants'

function getToken() {
  return window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
}

export function provideFormHeaders() {
  return Headers({
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  })
}

export function provideFormTokenHeaders() {
  return Headers({
    'Authorization': `Bearer ${getToken()}`,
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  })
}

export function provideTokenHeader() {
  return Headers({
    'Authorization': `Bearer ${getToken()}`
  })
}

export function provideJsonTokenHeader() {
  return Headers({
    'Authorization': `Bearer ${getToken()}`,
    'Content-Type': 'application/json; charset=utf-8'
  })
}

export function provideJsonHeader() {
  return Headers({
    'Content-Type': 'application/json; charset=utf-8'
  })
}
