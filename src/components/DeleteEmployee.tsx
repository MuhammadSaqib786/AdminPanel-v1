import React, { useState, FormEvent } from 'react';
import { Button, TextInput } from '@mantine/core';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
}

interface DeleteEmployeeFormProps {
  onDeleteEmployee: (employeeId: number) => void;
}

const DeleteEmployee: React.FC<DeleteEmployeeFormProps> = ({ onDeleteEmployee }) => {
  const [id, setId] = useState<number | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (id !== null) {
      onDeleteEmployee(id);
      setId(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 100 }}>
      <div>
        <TextInput
          id="empId"
          label="Enter ID to delete"
          type="number"
          value={id ?? ''}
          onChange={(event) => setId(parseInt(event.currentTarget.value))}
          required
        />
      </div>

      <Button type="submit" style={{ marginTop: 16 }}>
        Delete Employee
      </Button>
    </form>
  );
};

export default DeleteEmployee;
