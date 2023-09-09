import createApi from './api.server.js';

class authService {
    constructor(baseUrl = 'http://localhost:3000/api/auth') {
        this.api = createApi(baseUrl);
    }

    async register(form) {
        return await this.api.post('/register', form);
    }

    async login(form) {
        return await this.api.post('/login', form);
    }
}

export default new authService;