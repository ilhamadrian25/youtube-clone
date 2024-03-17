import React, { useState } from 'react'
import Head from './Head'
import Sidebar from './Sidebar'

const Main = ({ children }: any) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
      <Head setOpenSidebar={setOpenSidebar}/>
      <div className="flex flex-row gap-3 h-screen">
        <Sidebar openSidebar={openSidebar}/>
        <div>
          h
        </div>
        {children}
      </div>
    </>
  )
}

export default Main