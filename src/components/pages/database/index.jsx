import React, { useState } from 'react';
import Sidebar from '../../layout/sidebar';
import GridTable from './GridTable';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { motion } from 'framer-motion';
import RefreshIcon from '@mui/icons-material/Refresh';
import Chart from './Chart';
import DataTab from './DataTab';
import AddForm from './AddForm';
import AddMultipleForm from './AddmultipleForm';
import FilterSlider from './filter';
const Database = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [addForm, setAddForm] = useState(false);
    const [addMultipleFormVisible, setAddMultipleFormVisible] = useState(false);

    const handleAddMultipleFormSubmit = (formData) => {
        console.log(formData); // Handle the form data submission
    };


    const openDataTab = (data) => {
        setSelectedData(data);
        setIsVisible(true);
    };

    const handleAddFormSubmit = (formData) => {
        console.log(formData); // You can handle the form data here, for example, send it to an API
    };
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleFilterClick = () => {
        setIsFilterOpen(!isFilterOpen);
    };


    return (
        <div className='flex w-screen h-screen overflow-hidden'>
            {/* Sidebar */}
            <div className='w-2/12 border-r-[1px] overflow-y-scroll scrollbar'>
                <Sidebar />
            </div>
            {/* Main content */}
            <div className='w-10/12 h-full border-black border-1 md:'>
                <div className='flex flex-col h-full w-full'>
                    <div className='basis-4/12 w-full flex justify-between gap-2 px-14 items-center'>
                        <Chart />
                    </div>
                    <div className='basis-8/12 h-full w-full px-10 flex flex-col justify-start items-center overflow-y-hidden'>
                        <div className='flex justify-between px-8 w-full items-center py-5'>
                            <div className="">
                                <p className='text-[#667085] text-xs'>Last Updated on {new Date(new Date().setDate(new Date().getDate() - 1)).toDateString()}</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 text-xs">
                                <input type="text" placeholder="Search..." className="border-gray-400 border-[1px] rounded-md pl-2 pr-4 py-1" />
                                <button className="flex justify-center items-center"><RefreshIcon fontSize='small' /></button>
                                <button className="flex justify-center items-center gap-1 pl-2 pr-4 py-1"><DeleteForeverOutlinedIcon fontSize='small' />Delete</button>
                                <button className="flex justify-center items-center gap-1 pl-2 pr-4 py-1 border-gray-400 border-[1px] rounded-md"><CloudUploadOutlinedIcon fontSize='small' />Import</button>
                                <button className="flex justify-center items-center gap-1 pl-2 pr-4 py-1 border-gray-400 border-[1px] rounded-md"><CloudDownloadOutlinedIcon fontSize='small' />Export</button>
                                <button onClick={() => setAddForm(!addForm)} className="flex justify-center items-center gap-1 bg-blue-700 border-[1px] border-blue-700 text-white rounded-md pl-2 pr-4 py-1"><AddIcon fontSize='small' />Add new</button>
                                <button
                                    onClick={handleFilterClick}
                                    className="flex justify-center items-center gap-1 bg-blue-700 border-[1px] border-blue-700 text-white rounded-md pl-2 pr-4 py-1"
                                >
                                    Filter
                                </button>
                                <FilterSlider isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
                            </div>
                        </div>
                        <div className='d-flex p-2 overflow-y-scroll scrollbar'>
                            <GridTable openDataTab={openDataTab} />
                        </div>
                    </div>
                </div>
            </div>
            <DataTab isVisible={isVisible} setVisible={setIsVisible} selectedData={selectedData} />
            {addForm && <AddForm setAddForm={setAddForm} onSubmit={handleAddFormSubmit} />}
            {addMultipleFormVisible && <AddMultipleForm onSubmit={handleAddMultipleFormSubmit} />} {/* Render AddMultipleForm if addMultipleFormVisible is true */}
        </div>
    )
}

export default Database;
