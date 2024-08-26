// import React from 'react'
import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { AuthContext } from '../context/AppContext'
import LogIn from '../pages/Login'
import { useContext } from 'react'

function RootLayout() {

    const {user:{user}} = useContext(AuthContext)

    return (
        <>
            <div className={`relative w-full md:flex`}>
                <SideMenu />
                <div className='flex items-center justify-center w-full'>
                    {user ? <Outlet /> : <LogIn/>}
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default RootLayout