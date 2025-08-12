import custimAxios from '@/services'

interface AuthLogin {
    username: string,
    password: string
    email?: string
}

export const authUtils = {
    login: async ({ username, password }: AuthLogin) => {
        const { data } = await custimAxios.post('auth/login', {
            username,
            password
        })
        localStorage.setItem("token", data?.token);
        return data
    },
    register: async ({ password, email, username }: AuthLogin) => {
        const { data } = await custimAxios.post('auth/register', {
            username,
            password,
            email
        }, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        localStorage.setItem("token", data?.token);
        return data
    },
}