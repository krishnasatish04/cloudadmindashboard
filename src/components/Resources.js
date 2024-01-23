import React from 'react';
import CloudResourceTable from './CloudResourceTable'; // Import your CloudResourceTable component

const Resources = () => {
  // Sample data for CloudResourceTable
  const resources = [
    { id: 1, name: 'Resource 1', status: 'Active', account: 'Account 1', region: 'Region A' },
    { id: 2, name: 'Reosurce 2', status: 'Inactive', account: 'Account 2', region: 'Region B' },
    // Add more sample data as needed
  ];

  return (
    <main className="main-container">
      <h3>Resources</h3>
      <CloudResourceTable resources={resources} />
    </main>
  );
};

export default Resources;