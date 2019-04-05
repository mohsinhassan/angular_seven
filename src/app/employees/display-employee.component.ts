import { Component, OnInit , Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

   
  @Input() employee : Employee;
  @Input() searchTerm : string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private _router: Router ,private _employeeService : EmployeeService ) { }

  ngOnInit() {
    console.log("here32");
  }

  viewEmployee(employeeId: number) {
    this._router.navigate(['/employees', employeeId], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }

  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }

  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id);
    this.notifyDelete.emit(this.employee.id);
  }
  // ngOnChanges( changes : SimpleChanges){
  //   for ( const propName of Object.keys(changes)) {
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);
      
  //     console.log(propName + "change from " + from + " to " + to);
  //   }

  // }

  // ngOnChanges( changes : SimpleChanges){
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;


  //   console.log("previous : " + (previousEmployee ? previousEmployee.title : 'null'));
  //   console.log("Current : " + (currentEmployee ? currentEmployee.title : 'null'));
  //   //console.log(changes);

  // }
}
