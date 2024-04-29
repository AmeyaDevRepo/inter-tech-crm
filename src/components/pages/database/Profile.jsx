// Profile.jsx
import React from 'react';

const Profile = ({ selectedData }) => {
    if (!selectedData) {
        return null;
    }

    const renderProfileImage = () => {
        if (selectedData.name) {
            return (
                <div className='bg-gray-50 text-blue-600 text-8xl font-bold flex justify-center items-center w-28 h-28 rounded-full mx-auto'>
                    {selectedData.name[0].toUpperCase()}
                </div>
            );
        } else {
            return (
                <div className='bg-gray-50 text-blue-600 text-8xl font-bold flex justify-center items-center w-28 h-28 rounded-full mx-auto'>
                    N/A
                </div>
            );
        }
    };
    

    return (
        <div className="p-10 bg-white rounded-md shadow-md">
            {renderProfileImage()}
            <h1 className='font-bold text-lg text-center pb-4'>{selectedData?.name?.toUpperCase() || "Not Available"}</h1>
            <p className='text-xs -mt-2 w-full font-light text-center border-b-[1px] border-gray-200 pb-4'>{selectedData?.designation || "Not Available"}</p>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <p className="text-sm font-semibold">Name:</p>
                    <p className="text-sm">{selectedData.name}</p>
                </div>
                <div>
                    <p className="text-sm font-semibold">Phone:</p>
                    <p className="text-sm">{selectedData.phone}</p>
                </div>
                <div>
                    <p className="text-sm font-semibold">Email:</p>
                    <p className="text-sm">{selectedData.email}</p>
                </div>
                <div>
                    <p className="text-sm font-semibold">Source:</p>
                    <p className="text-sm">{selectedData.source}</p>
                </div>
                <div>
                    <p className="text-sm font-semibold">Company:</p>
                    <p className="text-sm">{selectedData.company}</p>
                </div>
                <div>
                    <p className="text-sm font-semibold">Designation:</p>
                    <p className="text-sm">{selectedData.designation}</p>
                </div>
                <div>
                    <p className="text-sm font-semibold">Zone:</p>
                    <p className="text-sm">{selectedData.zone}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
