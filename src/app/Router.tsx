import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";
import NotFound from "../pages/404";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from '../pages/Dashboard';

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* 404 Not Found page */}
                <Route element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
                <Route path='' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;