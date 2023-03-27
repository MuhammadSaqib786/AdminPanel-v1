import { Employee } from "@/components/AddEmployeeForm";

const sqlite = require('sqlite-electron');

export async function createEmployee(employee: Employee) {
  const query = 'INSERT INTO Employee (name, department, position) VALUES (?, ?, ?, ?);';
  const values = [employee.name, employee.department, employee.position];
  await sqlite.executeQuery(query, '', values);
}

export async function readEmployee(id: any) {
  const query = 'SELECT * FROM Employee WHERE id = ?;';
  const values = [id];
  const result = await sqlite.executeQuery(query, '1', values);
  return result[0];
}

export async function updateEmployee(id: any, employee: { name: any; department: any; position: any; salary: any; }) {
  const query = 'UPDATE Employee SET name = ?, department = ?, position = ? WHERE id = ?;';
  const values = [employee.name, employee.department, employee.position, id];
  await sqlite.executeQuery(query, '', values);
}

export async function deleteEmployee(id: any) {
  const query = 'DELETE FROM Employee WHERE id = ?;';
  const values = [id];
  await sqlite.executeQuery(query, '', values);
}
