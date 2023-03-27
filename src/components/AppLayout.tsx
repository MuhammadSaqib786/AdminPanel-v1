import React, { useState } from 'react';
import { Container, Grid, Col } from '@mantine/core';
import AddEmployeeForm, { Employee } from './AddEmployeeForm';

import Footers from './Footers';
import { DoubleNavbar } from './DoubleNavbar';
import { createEmployee } from '@/Data/interfaces/database';



const AppLayout = () => {
  const [newEmployeeId, setNewEmployeeId] = useState<number>();
  const handleAddEmployee = (employee: Employee) => {
    createEmployee(employee)
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
