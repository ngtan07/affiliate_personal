import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/user/HomePage'
import UserLayout from '../components/layout/UserLayout'

const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />} >
                <Route path='/' element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes
