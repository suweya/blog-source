import request from '../utils/request'
import { stringify } from 'qs'
import { provideFormHeaders, provideFormTokenHeaders, provideTokenHeader,
         provideJsonTokenHeader, provideJsonHeader } from '../utils/headerUtil'

export function fetchPosts({ pageInfo, keyword, userId }) {
  return request(`/api/posts?${stringify({...pageInfo, keyword, userId})}`, {
    method: 'GET',
    headers: provideTokenHeader()
  })
}

export function fetchContent({ postId }) {
  return request(`/api/posts/${postId}/content`, {
    method: 'GET',
    headers: provideTokenHeader()
  })
}

export function createPost({ title, content }) {
  return request(`/api/posts`, {
    method: 'POST',
    headers: provideJsonTokenHeader(),
    body: JSON.stringify({
      title, content
    })
  })
}

export function patchPost({ title, content, postId }) {
  return request(`/api/posts/${postId}`, {
    method: 'PATCH',
    headers: provideJsonTokenHeader(),
    body: JSON.stringify({
      title, content
    })
  })
}

export function setVisibilityOfPost({ visible, postId }) {
  return request(`/api/posts/${postId}`, {
    method: 'PATCH',
    headers: provideJsonTokenHeader(),
    body: JSON.stringify({
      visible
    })
  })
}

export function deletePost({ postId }) {
  return request(`/api/posts/${postId}`, {
    method: 'DELETE',
    headers: provideTokenHeader()
  })
}


export function fetchPostInfo({ postId }) {
  return request(`/api/posts/${postId}`, {
    method: 'GET',
    headers: provideTokenHeader()
  })
}
