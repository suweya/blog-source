import request from '../utils/request'
import { stringify } from 'qs'
import { provideFormHeaders, provideFormTokenHeaders, provideTokenHeader,
         provideJsonTokenHeader, provideJsonHeader } from '../utils/headerUtil'

export function fetchComments() {
  return request(`/api/comments?${stringify(postId)}`, {
    method: 'GET',
    headers: provideTokenHeader()
  })
}

export function createComment({ postId, comment }) {
  const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  return request(`/api/comments?${stringify(postId)}`, {
    method: 'POST',
    headers: provideFormTokenHeaders(),
    body: stringify({
      postId,
      content: comment
    })
  })
}

export function deleteComment({ commentId }) {
  return request(`/api/comments/${commentId}`, {
    method: 'DELETE',
    headers: provideTokenHeader()
  })
}

export function setVisibilityOfComment({ commentId, visible }) {
  return request(`/api/comments/${commentId}`, {
    method: 'PATCH',
    headers: provideJsonTokenHeader(),
    body: JSON.stringify({
      visible
    })
  })
}

export function patchComment({ commentId, comment }) {
  return request('', {
    method: 'PATCH',
    headers: provideJsonTokenHeader(),
    body: JSON.stringify({
      content: comment
    })
  })
}
