import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/*" element={<UserRoutes />} />
        </Routes>
    )
}

export default AppRoutes
