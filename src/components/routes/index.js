// AllRoutes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckAuth from './CheckAuth';
import Dashboard from '../pages/dashboard/index';
import AuthRoute from './AuthRoute';
import Database from '../pages/database/index';

const AllRoutes = () => {
    return (
        <Router> {/* Wrap your routes in a Router component */}
            <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<DataEntry />} />

            </Routes>
        </Router>
    );
};

export default AllRoutes;
