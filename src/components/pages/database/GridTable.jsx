import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';

function createData(name, phone, email, source, company, designation, zone ) {
    return { name, phone, email, source, company, designation, zone };
}

const staticData = [
    createData('Rahul Sharma', '98765-43210', 'rahul.sharma@example.com', 'Linkedin', 'Software Corporation', 'Manager', 'North'),
    createData('Priya Patel', '87654-32109', 'priya.patel@example.com', 'FaceBook', 'Web pvt Ltd', 'Senior Engineer', 'West'),
    createData('Amit Singh', '76543-21098', 'amit.singh@example.com', 'BNI', 'Amit Pvt Ltd', 'Software Developer', 'South'),
    createData('Anjali Gupta', '65432-10987', 'anjali.gupta@example.com', 'Linkedin', 'LMN Infotech', 'Team Lead', 'East'),
    createData('Suresh Kumar', '54321-09876', 'suresh.kumar@example.com', 'Others', 'JKL Solutions', 'Consultant', 'South'),
];

export default function GridTable({ setData, openDataTab }) {
    return (
        <TableContainer component={Paper} sx={{ width: "auto", height: "100%" }} className='scrollbar overflow-y-scroll overflow-x-scroll scrollbary border-[1px]'>
            <Table size="small" sx={{ width: "auto" }} aria-label="simple table">
                <TableHead className='bg-[#f1f1f2] sticky top-0 z-10' sx={{ width: "auto" }} >
                    <TableRow sx={{ width: "auto" }} >
                        <TableCell padding="checkbox" sx={{ paddingX: 2 }}>
                            <Checkbox color="primary" />
                        </TableCell>
                        <TableCell sx={{ paddingX: 2 }} align="left">
                            Name
                        </TableCell>
                        <TableCell sx={{ paddingX: 2 }} align="left">
                            Phone&nbsp;No
                        </TableCell>
                        <TableCell sx={{ paddingX: 2 }} align="left">
                            Email
                        </TableCell>
                        <TableCell sx={{ paddingX: 2 }} align="left">
                            Source
                        </TableCell>
                        <TableCell sx={{ paddingX: 2 }} align="left">
                            Company Name
                        </TableCell>
                        <TableCell sx={{ paddingX: 2 }} align="left">
                            Designation
                        </TableCell>
                        <TableCell sx={{ paddingX: 2 }} align="left">
                            Zone
                        </TableCell>
                        <TableCell sx={{ paddingX: 2 }} align="left"></TableCell>
                        <TableCell sx={{ paddingX: 2 }} align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ width: "auto" }}>
                    {staticData.map((row, i) => (
                        <TableRow
                            key={i}
                            onClick={() => openDataTab(row)}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, width: "auto", paddingX: 0 }}
                            className='hover:bg-gray-50 cursor-pointer'
                        >
                            <TableCell className='truncate max-w-48 ' padding="checkbox" sx={{ paddingX: 2 }}>
                                <Checkbox color="primary" />
                            </TableCell>
                            <TableCell className='truncate max-w-40' align="left" sx={{ paddingX: 2 }}>
                                {row.name}
                            </TableCell>
                            <TableCell className='truncate max-w-40' align="left" sx={{ paddingX: 2 }}>
                                {row.phone}
                            </TableCell>
                            <TableCell className='truncate max-w-40' align="left" sx={{ paddingX: 2 }}>
                                {row.email}
                            </TableCell>
                            <TableCell className='truncate max-w-40' align="left" sx={{ paddingX: 2 }}>
                                {row.source}
                            </TableCell>
                            <TableCell className='truncate max-w-40' align="left" sx={{ paddingX: 2 }}>
                                {row.company}
                            </TableCell>
                            <TableCell className='truncate max-w-40' align="left" sx={{ paddingX: 2 }}>
                                {row.designation}
                            </TableCell>
                            <TableCell className='truncate max-w-40' align="center" sx={{ paddingX: 2 }}>
                                {row.zone}
                            </TableCell>
                            <TableCell className='truncate' align="left" sx={{ paddingX: 2, }} onClick={() => setData(row)}>
                                <SaveAsOutlinedIcon fontSize='small'/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
