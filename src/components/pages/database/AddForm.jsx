import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import AddMultipleForm from './AddmultipleForm';
const AddForm = ({ setAddForm, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        source: '',
        company: '',
        designation: '',
        zone: ''
    });
    const [showMultipleForm, setShowMultipleForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const toggleMultipleForm = () => {
        setAddForm(false)
        setShowMultipleForm(prevState => !prevState);
    };

    const close = () => {
        setAddForm(false);
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-75 z-20">
            <div className="bg-white p-8 rounded-md">
                <div className='z-[30] bg-[rgba(11,11,11,0.3)] absolute top-0 left-0 h-screen w-screen' onClick={() => { close(); }}></div>
                <motion.button onClick={() => { close(); }} whileTap={{ scale: 0.85 }} transition={{ duration: 0.3 }} className='flex sticky float-right top-4 right-4 justify-center items-center px-2 py-1 text-xs bg-gray-50 rounded-md'><CloseIcon fontSize='small' /></motion.button>

                <h2 className="text-2xl font-bold mb-4">Database</h2>
                {showMultipleForm ? (
                    <AddMultipleForm />
                ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm font-semibold">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border-gray-300 border p-2 w-full rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-sm font-semibold">Phone:</label>
                            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border-gray-300 border p-2 w-full rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-semibold">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border-gray-300 border p-2 w-full rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="source" className="text-sm font-semibold">Source:</label>
                            <input type="text" id="source" name="source" value={formData.source} onChange={handleChange} className="border-gray-300 border p-2 w-full rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="company" className="text-sm font-semibold">Company:</label>
                            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="border-gray-300 border p-2 w-full rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="designation" className="text-sm font-semibold">Designation:</label>
                            <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} className="border-gray-300 border p-2 w-full rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="zone" className="text-sm font-semibold">Zone:</label>
                            <input type="text" id="zone" name="zone" value={formData.zone} onChange={handleChange} className="border-gray-300 border p-2 w-full rounded-md" />
                        </div>
                        <div className="col-span-2 flex justify-between">
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">Add</button>
                            <button onClick={toggleMultipleForm} className="bg-blue-600 text-white py-2 px-4 rounded-md">Add Multiple</button>
                        </div>
                    </form>
                )}

            </div>
        </div>
    );
};

export default AddForm;
