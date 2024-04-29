import React from 'react'
import {PieChart,Pie,Sector,Cell,ResponsiveContainer} from 'recharts'
import svg from '../../../assets/02.svg'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import clogo from '../../../assets/clogo.svg'
import {motion} from 'framer-motion'
const Chart = ({}) => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 400 },
        { name: 'Group C', value: 400 },
        { name: 'Group D', value: 400 },
      ];
      const activeData = [
        { name: 'Group A', value: 0 },
        { name: 'Group B', value: 0 },
      ]
      
      const RADIAN = Math.PI / 180;
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      const COLORSHalf = ['#bde0fe','#0088FE'];
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
        const radiusX = innerRadius + (outerRadius - innerRadius) * 0.1;
        const x = cx + radiusX * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
          <text x={x} y={y} fill="black" className='font-semibold text-base' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {index == 0 ? "Facebook" : index == 1 ? "Linkedin": index ==2 ? "BNI" : index== 3 ? "Others" : ""}
          </text>
        );
      };
      const renderCustomizedLabelnext = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
        const radiusX = innerRadius + (outerRadius - innerRadius) * 0.1;
        const x = cx + radiusX * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
          <text x={x} y={y} fill="black" className='font-semibold text-base' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {index == 0 ? "East" : index == 1 ? "West": index ==2 ? "North" : index== 3 ? "South" : ""}
          </text>
        );
      };
  return (
        true ? 
                <div className='flex justify-between items-center w-full'>
                    <motion.div whileInView={{opacity:[0,1]}} transition={{duration:2,delay:0.3}} className='h-[130px] opacity-0 card-purple w-[230px] rounded-xl relative overflow-hidden z-[2]'>
                        <div className='absolute top-0 left-0 h-full w-full rotate-6 flex'>
                        <img src={svg} alt="" className='absolute left-3'/>
                        <img src={svg} alt="" className='left-6 absolute'/>
                        <img src={svg} alt="" className='absolute left-12'/>
                        <img src={svg} alt="" className='absolute left-18'/>
                        <img src={svg} alt="" className='absolute left-20'/>
                        <img src={svg} alt="" className='absolute left-26'/>
                        </div>
                        <div className='h-full w-full z-[4] px-6 py-6 relative'>
                            <h1 className='text-white font-semibold text-base'>No Of Leads </h1>
                            <h1 className='font-bold text-lg text-white flex items-center'>9000</h1>
                            <img src={clogo} alt=""  className='absolute right-6 bottom-6'/>
                            {/* <h1 className='text-xs font-light text-white absolute bottom-6'> Current Financial Year</h1> */}
                        </div>
                    </motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} transition={{duration:2,delay:0.3}} className='h-[130px] opacity-0 card-green w-[230px] rounded-xl relative overflow-hidden z-[2]'>
                        <div className='absolute top-0 left-0 h-full w-full rotate-6 flex'>
                        <img src={svg} alt="" className='absolute left-3'/>
                        <img src={svg} alt="" className='left-6 absolute'/>
                        <img src={svg} alt="" className='absolute left-12'/>
                        <img src={svg} alt="" className='absolute left-18'/>
                        <img src={svg} alt="" className='absolute left-20'/>
                        <img src={svg} alt="" className='absolute left-26'/>
                        </div>
                        <div className='h-full w-full z-[4] px-6 py-6 relative'>
                            <h1 className='text-white font-semibold text-base'>Leads added in last 30 days </h1>
                            <h1 className='font-bold text-lg text-white flex items-center'>10,000
                            </h1>
                            <img src={clogo} alt=""  className='absolute right-6 bottom-6'/>
                        </div>
                    </motion.div>
                  <div className='flex flex-col justify-center items-center'>
                  <PieChart width={180} height={180}>
                      <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          
                      >
                          {data.map((entry, index) => (
                              <Cell key={`cell-${index}`} className='z-10' fill={COLORS[index % COLORS.length]} />
                          ))}
                      </Pie>
                  </PieChart>
                    <h1 className='font-semibold text-base'>Leads by Source</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                  <PieChart width={180} height={180}>
                      <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabelnext}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          
                      >
                          {data.map((entry, index) => (
                              <Cell key={`cell-${index}`} className='z-10' fill={COLORS[index % COLORS.length]} />
                          ))}
                      </Pie>
                  </PieChart>
                  <h1 className='font-semibold text-base'> Leads by Zone
                  </h1>
                  </div>

             </div>
        :
        <></>
    )
}

export default Chart