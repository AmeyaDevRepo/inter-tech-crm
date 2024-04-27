// AllRoutes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckAuth from './CheckAuth';
import Dashboard from '../pages/dashboard/index';
import AuthRoute from './AuthRoute';
import DataEntry from '../pages/data entry/index';

const AllRoutes = () => {
    return (
        <Router> {/* Wrap your routes in a Router component */}
            <Routes>
                {/* Auth */}
                <Route element={<CheckAuth />} />
                <Route element={<AuthRoute />}>
                    {/* Dashboard */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/data-entry" element={<DataEntry />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AllRoutes;
