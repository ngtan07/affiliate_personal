import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'

const UserLayout = () => {
    return (
        <div className="bg-background text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed flex flex-col min-h-screen">
            <main className="max-w-5xl mx-auto px-4 py-8 grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default UserLayout
