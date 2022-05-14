import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* 404 Not Found page */}
                <Route element={<Landing />} />
                <Route path='*' element={<Landing />} />
                <Route path='' element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;