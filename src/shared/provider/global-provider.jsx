
import { useState } from 'react'
import GlobalContext from '../../app/context/global-context'
import { UserStorage } from '../UserStorage/UserStorage'

function GlobalProvider({ children }) {
    const [user, setUser] = useState(() => UserStorage.getUserStorage())
    const [page, setPage] = useState(1)
    const value = {
        user,
        setUser,
        page,
        setPage
    }

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export default GlobalProvider
