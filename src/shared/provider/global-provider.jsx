
import React, { useEffect, useState } from 'react'
import GlobalContext from '../../app/context/global-context'
import { AxiosInstance } from '../axiosInstanse/axiosInstanse'
import { UserStorage } from '../UserStorage/UserStorage'

function GlobalProvider({ children }) {
const [user, setUser] = useState(()=>UserStorage.getUserStorage())

const value = {
}

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export default GlobalProvider
