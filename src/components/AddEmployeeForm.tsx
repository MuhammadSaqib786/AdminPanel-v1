import React, { useState, FormEvent } from 'react';
import { Button, TextInput } from '@mantine/core';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
}

interface AddEmployeeFormProps {
  onAddEmployee: (employee: Employee) => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newEmployee: Employee = {
      id: Date.now(),
      name,
      department,
      position,
    };
    onAddEmployee(newEmployee);
    setName('');
    setDepartment('');
    setPosition('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 100 }}>
      <div>
        <TextInput
          id="name"
          label="Name"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          required
        />
      </div>
      <div>
        <TextInput
          id="department"
          label="Department"
          value={department}
          onChange={(event) => setDepartment(event.currentTarget.value)}
          required
        />
      </div>
      <div>
        <TextInput
          id="position"
          label="Position"
          value={position}
          onChange={(event) => setPosition(event.currentTarget.value)}
          required
        />
      </div>
      <Button type="submit" style={{ marginTop: 16 }}>Add Employee</Button>
    </form>
  );
};

export default AddEmployeeForm;
