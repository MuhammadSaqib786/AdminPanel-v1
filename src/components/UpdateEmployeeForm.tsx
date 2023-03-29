import React, { useState, useEffect, FormEvent } from 'react';
import { Button, TextInput } from '@mantine/core';
import sendAsync from "@/message-control/renderer";

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
}

interface UpdateEmployeeFormProps {
  onUpdateEmployee: (employee: Employee) => void;
}

const UpdateEmployeeForm: React.FC<UpdateEmployeeFormProps> = ({ onUpdateEmployee }) => {
  const [employee, setEmployee] = useState<Employee>({ id: 0, name: '', department: '', position: '' });
  const [searchId, setSearchId] = useState<number>(0);
  const [searchedEmployee, setSearchedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    // Load employee data based on searchId
    if (searchId) {
      sendAsync(`SELECT * FROM employees WHERE id=${searchId}`)
        .then((data: Employee[]) => {
          if (data.length > 0) {
            setSearchedEmployee(data[0]);
          } else {
            setSearchedEmployee(null);
          }
        })
        .catch((error) => {
          console.error('Error searching employee:', error);
          setSearchedEmployee(null);
        });
    } else {
      setSearchedEmployee(null);
    }
  }, [searchId]);

  useEffect(() => {
    // Initialize the employee state when the searchedEmployee data is available
    if (searchedEmployee) {
      setEmployee(searchedEmployee);
    }
  }, [searchedEmployee]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchId(parseInt(event.currentTarget.searchId.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onUpdateEmployee(employee);
    setEmployee({ id: 0, name: '', department: '', position: '' });
    setSearchId(0);
    setSearchedEmployee(null);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          <TextInput
            id="searchId"
            label="Search Employee by ID"
            type="number"
            required
          />
        </div>

        <Button type="submit" style={{ marginTop: 16 }}>
          Search Employee
        </Button>
      </form>

      {searchedEmployee && (
        <form onSubmit={handleSubmit}>
          <div>
            <TextInput
              id="id"
              label="Employee ID"
              type="number"
              value={employee.id}
              readOnly
            />
          </div>

          <div>
            <TextInput
              id="name"
              label="Employee Name"
              value={employee.name}
              onChange={(event) =>
                setEmployee({ ...employee, name: event.currentTarget.value })
              }
              required
            />
          </div>

          <div>
            <TextInput
              id="department"
              label="Employee Department"
              value={employee.department}
              onChange={(event) =>
                setEmployee({
                  ...employee,
                  department: event.currentTarget.value,
                })
              }
              required
            />
          </div>

         


          <div>
            <TextInput
              id="position"
              label="Position"
              value={employee.position}
              onChange={(event) =>
                setEmployee({ ...employee, position: event.currentTarget.value })
              }
              required
            />
          </div>

          <Button type="submit" style={{ marginTop: 16 }}>
            Update Employee
          </Button>
        </form>
      )}
    </div>
  );
};

export default UpdateEmployeeForm;
