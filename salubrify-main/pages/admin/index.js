import Router from 'next/router'
import React, { useEffect } from 'react'
import Header from '../../components/common/Header'
import Sidebar from '../../components/Admin/Common/Sidebar'


const index = () => {

useEffect(() => {
  Router.push('/order')
}, [])


  return (
    <div className='bg-secondary'>
        <Sidebar/>
    </div>
  )
}

export default index