import { Navigate, Routes, Route } from "react-router-dom";
import { AkatsukiPage }from '../pages/akatsuki/Akatsuki'
import { Home } from '../pages/home/Home' 
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/akatsuki' element={<AkatsukiPage />} />
            <Route path='/sobre' element={<Home />} />
            <Route path='*' element={<Navigate to='/sobre' /> } />
        </Routes>
    )
}