import React, { useState } from 'react';

const AddMultipleForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        entries: [
            { source: '', company: '', designation: '', zone: '' } // Initial entry
        ]
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (name === "source" || name === "company" || name === "designation" || name === "zone") {
            const updatedEntries = [...formData.entries];
            updatedEntries[index][name] = value;
            setFormData(prevState => ({
                ...prevState,
                entries: updatedEntries
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleAddEntry = () => {
        setFormData(prevState => ({
            ...prevState,
            entries: [...prevState.entries, { source: '', company: '', designation: '', zone: '' }]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-200 bg-opacity-75 z-[50]">
            <div className="bg-white p-8 rounded-md z-[51]">
                <h2 className="text-2xl font-bold mb-4">Data base</h2>
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
                    {formData.entries.map((entry, index) => (
                        <React.Fragment key={index}>
                            <div>
                                <label htmlFor={`source${index}`} className="text-sm font-semibold">Source:</label>
                                <input type="text" id={`source${index}`} name="source" value={entry.source} onChange={(e) => handleChange(e, index)} className="border-gray-300 border p-2 w-full rounded-md" />
                            </div>
                            <div>
                                <label htmlFor={`company${index}`} className="text-sm font-semibold">Company:</label>
                                <input type="text" id={`company${index}`} name="company" value={entry.company} onChange={(e) => handleChange(e, index)} className="border-gray-300 border p-2 w-full rounded-md" />
                            </div>
                            <div>
                                <label htmlFor={`designation${index}`} className="text-sm font-semibold">Designation:</label>
                                <input type="text" id={`designation${index}`} name="designation" value={entry.designation} onChange={(e) => handleChange(e, index)} className="border-gray-300 border p-2 w-full rounded-md" />
                            </div>
                            <div>
                                <label htmlFor={`zone${index}`} className="text-sm font-semibold">Zone:</label>
                                <input type="text" id={`zone${index}`} name="zone" value={entry.zone} onChange={(e) => handleChange(e, index)} className="border-gray-300 border p-2 w-full rounded-md" />
                            </div>
                        </React.Fragment>
                    ))}
                    <div className="col-span-2 flex justify-between">
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">Add</button>
                        <button onClick={handleAddEntry} className="bg-blue-600 text-white py-2 px-4 rounded-md">Add More</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMultipleForm;
