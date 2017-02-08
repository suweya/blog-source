import BaseService from './baseService';

class UserService extends BaseService {

  auth(username, password) {
    return super.post('/api/token', {
      username,
      password,
      grant_type: 'password',
    }, false);
  }

  createUser(username, password, email) {
    return super.post('/api/user', {
      username,
      password,
      email,
    }, false);
  }

  getSelfInfo() {
    return super.get('/api/user');
  }

  getUserInfo(userId) {
    return super.get(`/api/user/${userId}`);
  }
}

export default new UserService();
