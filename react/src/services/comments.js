import request from '../utils/request'
import BaseService from './baseService'
import { stringify } from 'qs'

class CommentsService extends BaseService {

  getComments(postId) {
    return super.get(`/api/comments?${stringify(postId)}`)
  }

  createComment(postId, comment) {
    return super.post(`/api/comments?${stringify(postId)}`, {
      postId,
      content: comment
    })
  }

  deleteComment(commentId) {
    return super.delete(`/api/comments/${commentId}`)
  }

  setVisibilityOfComment(commentId, visible) {
    return super.patch(`/api/comments/${commentId}`, {
      visible
    })
  }

  patchComment(commentId, comment) {
    return super.patch(`/api/comments/${commentId}`, {
      content: comment
    })
  }
}

export default new CommentsService()
