import React, { useState } from 'react';
import { Container, Grid, Col } from '@mantine/core';
import AddEmployeeForm from './AddEmployeeForm';

import Footers from './Footers';

import { DoubleNavbar } from './DoubleNavbar';
import { Employee } from '@/entities/Employee';
import sendAsync from "@/message-control/renderer";



const AppLayout = () => {
  const [newEmployeeId, setNewEmployeeId] = useState<number>();
  const handleAddEmployee = (employee : Employee) => {
    console.log(employee)
    const sql = `INSERT INTO employees (id, name, department, position) VALUES (${employee.id}, '${employee.name}', '${employee.department}', '${employee.position}')`;

    sendAsync(sql)
      .then(() => {
        console.log('Employee added successfully');
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
      });
  };
  
  
  

  return (
    <Container fluid style={{ padding: 0 , width : 900}}>
      <Grid>
        
        <Col sm={3} >
          <DoubleNavbar />
        </Col>
        <Col sm={9} style={{ paddingRight: '16px' }}>
        <AddEmployeeForm onAddEmployee={handleAddEmployee} />
        </Col>
      </Grid>
      <Footers />
    </Container>
  );
};

export default AppLayout;
