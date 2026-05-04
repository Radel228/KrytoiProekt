
import React, { useEffect, useState } from 'react'
import GlobalContext from '../../app/context/global-context'
import { AxiosInstance } from '../axiosInstanse/axiosInstanse'

function GlobalProvider({ children }) {


const getSpace = () => {
    const response = AxiosInstance.get("/space")
    return response.data
}


useEffect(() => {
    getSpace()
})


const value = {
getSpace
}

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export default GlobalProvider
