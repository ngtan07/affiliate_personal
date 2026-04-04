import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/admin/LoginPage'
import DashboardPage from '../pages/admin/DashboardPage'
import ProductsPage from '../pages/admin/ProductsPage'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="products" element={<ProductsPage />} />
            </Route>

        </Routes>
    )
}

export default AdminRoutes
