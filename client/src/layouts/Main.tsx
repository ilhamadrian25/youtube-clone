import React from 'react'
import Head from './Head'
import Sidebar from './Sidebar'

const Main = ({ children }: any) => {
  return (
    <>
        <Head />
        <Sidebar />
        {children}
    </>
  )
}

export default Main