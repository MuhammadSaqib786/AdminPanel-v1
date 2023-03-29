import React, { useEffect, useState } from 'react';
import sendAsync from "@/message-control/renderer";
import { Table } from '@mantine/core';
import { Title } from '@mantine/core';

function ViewEmployeeList(props) {
  const rows = props.employees.map((employee) => (
    <tr key={employee.id}>
      <td align="center">{employee.id}</td>
      <td align="center">{employee.name}</td>
      <td align="center">{employee.department}</td>
      <td align="center">{employee.position}</td>
      </tr>
    
  ));
  return (
    <div>
      <Title order={2} style={{ marginTop: 20, marginBottom: 20 }}>Below are Employee Details</Title>
      <Table striped highlightOnHover withBorder>
        <thead>
        <tr>
          
            <th align="center">ID</th>
            <th align="center">Name</th>
            <th align="center">Department</th>
            <th align="center">Position</th>
          
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
        
      </Table>
    </div>
  );
}

export default ViewEmployeeList;
