import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/user/HomePage'
import ProductDetailPage from '../pages/user/ProductDetailPage'
import TemplateDetailPage from '../pages/user/TemplateDetailPage'
import TemplatesPage from '../pages/user/TemplatesPage'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='product/:productSlug' element={<ProductDetailPage />} />
            <Route path='template/:templateSlug' element={<TemplateDetailPage />} />
            <Route path='templates' element={<TemplatesPage />} />
        </Routes>
    )
}

export default UserRoutes
