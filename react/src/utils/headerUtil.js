import { TOKEN_KEY } from '../constants/constants'
import { get } from './LocalStorageUtil'

export function provideFormHeaders() {
  return Headers({
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  })
}

export function provideFormTokenHeaders() {
  return Headers({
    'Authorization': `Bearer ${get(TOKEN_KEY)}`,
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  })
}

export function provideTokenHeader() {
  return Headers({
    'Authorization': `Bearer ${get(TOKEN_KEY)}`
  })
}

export function provideJsonTokenHeader() {
  return Headers({
    'Authorization': `Bearer ${get(TOKEN_KEY)}`,
    'Content-Type': 'application/json; charset=utf-8'
  })
}

export function provideJsonHeader() {
  return Headers({
    'Content-Type': 'application/json; charset=utf-8'
  })
}
