import React, { useState } from 'react';
import Logo from '../../assets/Ameya Innovex Logo.png';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'react-cookies';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <React.Fragment>
            <div className='w-full h-screen overflow-y-scroll scrollbar hidden bg-[#fff] sm:flex sm:flex-col pt-2 text-base font-semibold relative'>

                <img src={Logo} alt="Logo" className='h-[200px] py-3 cursor-pointer' style={{ paddingRight: '5rem' }} />


                <NavLink to='/dashboard' className={({ isActive }) => `${isActive ? "text-[#004aad]" : "text-gray-600"} hover:bg-gray-50 cursor-pointer flex justify-start items-center w-full py-2 px-4 gap-2 relative`}><DashboardIcon fontSize='small' />Dashboard </NavLink>


                <NavLink to="/data-entry" className={({ isActive }) => `${isActive ? "text-[#004aad]" : ""} px-8 no-underline flex justify-start items-center py-2 cursor-pointer bg-gray-100 hover:bg-gray-50 gap-2`}><PaidIcon fontSize='small' />Data Entry</NavLink>


            </div>
        </React.Fragment>
    );
}

export default Sidebar;