import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import Profile from './Profile';
// import {useSelector,useDispatch} from 'react-redux';
const DataTab = ({ isVisible, setVisible,  }) => {
    const [bankIcon, setBankIcon] = React.useState(false);
    // const dispatch = use;
    const containerVariants = {
        visible: { opacity: 1, visibility: 'visible' },
        hidden: { opacity: 0, visibility: 'hidden' }
    };
    const close = () => {
        setVisible(false);
    }
    return (
        <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            exit="hidden"
            variants={containerVariants}
            transition={{ duration: 0.3 }}
            className='z-10 bg-transparent w-screen h-screen absolute flex justify-center items-center'>
            <div className='z-[11] bg-[rgba(11,11,11,0.3)] absolute top-0 left-0 h-screen w-screen' onClick={() => { close(); }}></div>
            <div className='z-[12] w-10/12 h-5/6 relative bg-white overflow-y-scroll scrollbar'>
                <motion.button onClick={() => { close(); }} whileTap={{ scale: 0.85 }} transition={{ duration: 0.3 }} className='flex sticky float-right top-4 right-4 justify-center items-center px-2 py-1 text-xs bg-gray-50 rounded-md'><CloseIcon fontSize='small' /></motion.button>
                <div className='flex px-4 py-4'>
                    {/* Profile */}
                    {
                        <Profile
                            bankIcon={bankIcon}
                            setBankIcon={setBankIcon}
                            // fields={fields}
                            // OthersAdd={OthersAdd}
                            // OthersDelete={OthersDelete}
                            // member={member}
                        />
                    }
                </div>
                {/* EditForm component */}
            </div>
        </motion.div>
    )
}
export default DataTab