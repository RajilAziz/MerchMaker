import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from './Navigationbar'

const Main = () => {
  return (

    <div>
        <Navigationbar/>
        <Outlet/>
        </div>
  )
}

export default Main