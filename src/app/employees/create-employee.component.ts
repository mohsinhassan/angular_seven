import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  panelTitle: string;
  
  employee : Employee;
  @ViewChild('EmployeeForm') public createEmployeeForm :NgForm;
  constructor(private _employeeService : EmployeeService, private _router : Router ,private _route : ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  saveEmployee(empForm): void {
        //empForm.id = 100;
    this._employeeService.save(empForm);
    this._router.navigate(['list']);

    //Employee.push(empForm);

    //EmployeeService.push(empForm);

  }

  
  private getEmployee(id: number) {
    // If the id is 0, we want to create a new employee. So we intialise the employee 
    // property with an Employee object with all properties set to null. The template 
    // is bound to this employee property so all the form fields are displayed blank, 
    // to enter details of a new employee we want to create
    if (id === 0) {
      this.employee = {
        id : null,
        name : null,
        gender : null,
        email : null,
        phoneNumber : null,
        department : null,
        dateOfBirth : null,
      };
      // Resetting the form, resets any previous validation errors
      this.createEmployeeForm.reset();
      this.panelTitle = 'Create Employee';
    } else {
      // If the Id is not 0, then retrieve the respective employee using the employee 
      // service. Copy the values into a new object and assign that object as the value 
      // for the employee property. Otherwise the employee property holds a reference 
      // to the employee object in the array in the EmployeeService. This means any 
      // changes we make on the form are automatically saved, without we explicitly
      // saving by clicking the Save button.
      this.employee = Object.assign({}, this._employeeService.getEmployee(id));
      this.panelTitle = 'Edit Employee';
    }
  }
}
