export interface LoginData {
    login: string
    password: string
}

export interface AuthResponse {
    authToken: string
}

export interface User {
    id?: number
    name: string
    fname: string
    mname: string
    avatar: string
    balance: number
    lastUpdatedAt: Date
    status: number
}
