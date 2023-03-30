import React, { useEffect, useState } from 'react';
import { Container, Grid, Col } from '@mantine/core';
import AddEmployeeForm from './AddEmployeeForm';

import Footers from './Footers';

import { DoubleNavbar } from './DoubleNavbar';
import { Employee } from '@/entity/Employee';
import sendAsync from "@/message-control/renderer";
import ViewEmployeeList from './ViewEmployeeList';
import DeleteEmployee from './DeleteEmployee';
import UpdateEmployeeForm from './UpdateEmployeeForm';



const AppLayout = () => {
  const [newEmployeeId, setNewEmployeeId] = useState<number>();
  const handleAddEmployee = (employee : Employee) => {
    console.log(employee)
    const sql = `INSERT INTO employees (id, name, department, position) VALUES (${employee.id}, '${employee.name}', '${employee.department}', '${employee.position}')`;

    sendAsync(sql)
      .then(() => {
        console.log('Employee added successfully');
        sendAsync("SELECT * FROM employees").then((data: React.SetStateAction<never[]>) => setEmployees(data));
        
      })
      .catch((error: any) => {
        console.error('Error adding employee:', error);
      });
  };

  const handleDeleteEmployee = (id: number) => {
    console.log(id);
    const sql = `DELETE FROM employees WHERE id=${id}`;
  
    sendAsync(sql)
      .then(() => {
        console.log('Employee deleted successfully');
        sendAsync("SELECT * FROM employees").then((data: React.SetStateAction<never[]>) =>
          setEmployees(data)
        );
      })
      .catch((error: any) => {
        console.error('Error deleting employee:', error);
      });
  };
  
  const handleUpdateEmployee = (updatedEmployee: Employee) => {
    console.log(updatedEmployee);
    const sql = `UPDATE employees SET name='${updatedEmployee.name}', department='${updatedEmployee.department}', position='${updatedEmployee.position}' WHERE id=${updatedEmployee.id}`;
    console.log(sql)
    sendAsync(sql)
      .then(() => {
        console.log('Employee updated successfully');
        sendAsync("SELECT * FROM employees").then((data: React.SetStateAction<never[]>) => setEmployees(data));
      })
      .catch((error: any) => {
        console.error('Error updating employee:', error);
      });
  };
  
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    sendAsync("SELECT * FROM employees").then((data: React.SetStateAction<never[]>) => setEmployees(data));
  }, []);
 
  
  

  return (
    <Container fluid style={{ padding: 0 , width : 900}}>
      <Grid>
        
        <Col sm={3} >
          <DoubleNavbar />
        </Col>
        <Col sm={9} style={{ paddingRight: '16px' }}>
        <AddEmployeeForm onAddEmployee={handleAddEmployee} />
        <DeleteEmployee onDeleteEmployee={handleDeleteEmployee} />
        <ViewEmployeeList employees={employees} />
        <UpdateEmployeeForm onUpdateEmployee={handleUpdateEmployee} />
        </Col>
      </Grid>
      <Footers />
    </Container>
  );
};

export default AppLayout;
