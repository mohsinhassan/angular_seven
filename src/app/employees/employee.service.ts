import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


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
    

    // getEmployees(): Employee[] {
    //     return this.listEmployees;
    // }

    getEmployees(): Observable<Employee[]> {
        return Observable.of(this.listEmployees).delay(20);
    }

    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
        
    } 
    save(employee: Employee) {
        if (employee.id === null) {
          // reduce() method reduces the array to a single value. This method executes
          // the provided function for each element of the array (from left-to-right)
          // When we implement the server side service to save data to the database
          // table, we do not have to compute the id, as the server will assing it
          const maxId = this.listEmployees.reduce(function (e1, e2) {
            return (e1.id > e2.id) ? e1 : e2;
          }).id;
          employee.id = maxId + 1;
      
          this.listEmployees.push(employee);
        } else {
          const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
          this.listEmployees[foundIndex] = employee;
        }
      }
}
