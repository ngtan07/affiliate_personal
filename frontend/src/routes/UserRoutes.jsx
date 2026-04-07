import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/user/HomePage'
import ProductDetail from '../pages/user/ProductDetail'
import TemplateDetail from '../pages/user/TemplateDetail'
import Templates from '../pages/user/Templates'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='product/:productSlug' element={<ProductDetail />} />
            <Route path='template/:templateSlug' element={<TemplateDetail />} />
            <Route path='templates' element={<Templates />} />
        </Routes>
    )
}

export default UserRoutes
