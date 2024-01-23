// Home.js
import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line,AreaChart, Area } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import Notification from './Notification';


function Home() {
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotificationCountChange = (count) => {
    setNotificationCount(count);
  };

 

  const cpuData = [
    { name: 'Core 1', usage: 70 },
    { name: 'Core 2', usage: 80 },
    { name: 'Core 3', usage: 60 },
    { name: 'Core 4', usage: 90 },
  ];

  const memoryData = [
    { name: 'Used', consumption: 60 },
    { name: 'Free', consumption: 40 },
  ];

  const serverDowntimeData = [
    { name: 'Downtime', value: 20 },
    { name: 'Uptime', value: 80 },
  ];

  const alertData = [
    { name: 'Alert A', value: 300 },
    { name: 'Alert B', value: 500 },
    { name: 'Alert C', value: 200 },
    { name: 'Alert D', value: 700 },
    { name: 'Alert E', value: 400 },
    { name: 'Alert F', value: 600 },
  ];

  const downtimeColors = ['#FF4136', '#2ECC40'];


  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>RESOURCES</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>{notificationCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>33</h1>
        </div>
     
      </div>

      <div className='charts'>
        <div className='chart'>
          <h3 className='chart-title '>CPU Usage</h3>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={cpuData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='usage' fill='#8884d8' name='Usage' />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='chart'>
          <h3 className='chart-title '>Memory Consumption</h3>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={memoryData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='consumption' stroke='#8884d8' name='Consumption' />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='chart'>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={500}
            height={300}
            data={alertData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="value" fill="#ff7300" stroke="#ff7300" />
          </AreaChart>
        </ResponsiveContainer>
        <h3 className='chart-title '>Alerts Data</h3>
        </div>

        <div className="chart">
            <ResponsiveContainer width='100%' height={300}>
            <PieChart width={400} height={300}>
              <Pie
                data={serverDowntimeData}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {serverDowntimeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={downtimeColors[index % downtimeColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              
            </PieChart>
            <h3 className='chart-title '>Server Downtime</h3>
            </ResponsiveContainer>
          </div>
      
      </div>
      <div>
      </div>
     

      <Notification onNotificationCountChange={handleNotificationCountChange} />
    </main>
  );
}

export default Home;