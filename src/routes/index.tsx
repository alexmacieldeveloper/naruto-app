import { Navigate, Routes, Route } from "react-router-dom";
import { AkatsukiPage, Home }from '../pages'
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/akatsuki' element={<AkatsukiPage />} />
            <Route path='/pagina-inicial' element={<Home />} />
            <Route path='*' element={<Navigate to='/pagina-inicial' /> } />
        </Routes>
    )
}