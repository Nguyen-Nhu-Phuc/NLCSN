import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            account: null,
            accessToken: '',
            refreshToken: ''
        }
    },

    persist: [
        {
            key: 'user',
            paths: ['account'],
            storage: sessionStorage
        },
        {
            key: 'accessToken',
            paths: ['accessToken'],
            storage: sessionStorage
        },
        {
            key: 'refresh',
            paths: ['refreshToken'],
            storage: sessionStorage
        }
    ]
})