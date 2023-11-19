export const API_ROUTES = {
    auth: {
        login: '/auth/login',
        register: '/auth/register',
        check: '/auth/check',
    },
    company: {
        get: '/company',
        reviews: (companyName:string) => `/reviews/${companyName}`,
    }
}