import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';


@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: 'IT'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            email: 'mary@pragimtech.com',
            dateOfBirth: new Date('11/20/1979'),
            department: 'HR'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            email: 'john@pragimtech.com',
            dateOfBirth: new Date('3/25/1976'),
            department: 'IT'
        },
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
        
    } 
}
