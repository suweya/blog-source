import request from '../utils/request'
import { provideJsonHeader, provideJsonTokenHeader, provideTokenHeader } from '../utils/headerUtil'

export default class BaseService {

    get(url, auth=true) {
        return request(url, {
            method: 'GET',
            headers: auth ? provideTokenHeader() : null
        })
    }

    post(url, body={}, auth=true) {
        return request(url, {
            method: 'POST',
            headers: auth ? provideJsonTokenHeader() : provideJsonHeader(),
            body: JSON.stringify(body)
        })
    }

    delete(url, auth=true) {
        return request(url, {
            method: 'DELETE',
            headers: auth ? provideTokenHeader() : null
        })
    }

    patch(url, body, auth=true) {
        return request(url, {
            method: 'PATCH',
            headers: auth ? provideJsonTokenHeader() : provideJsonHeader(),
            body: JSON.stringify(body)
        })
    }
}