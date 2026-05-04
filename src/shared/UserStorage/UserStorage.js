export const UserStorage = {
    setAccessToken: (token) => {
        localStorage.setItem("access", token)
    },
    getAccessToken: () => {
        return localStorage.getItem("access")
    },
    setRefreshToken: (token) => {
        localStorage.setItem("refresh", token)
    },
    getRefreshToken: () => {
        return localStorage.getItem("refresh")
    },
    setUserStorage: (user) => {
        localStorage.setItem("user", JSON.stringify(user))
    },
    getUserStorage: () => {
        const user = localStorage.getItem("user")
        return user ? JSON.parse(user) : null
    },

    clearStotrage: () => {
        localStorage.removeItem("access")
         localStorage.removeItem("refresh")
          localStorage.removeItem("user")
    }
}