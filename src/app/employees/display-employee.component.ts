import { Component, OnInit , Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

   
  @Input() employee : Employee;
  @Input() searchTerm : string;
  
  constructor(private _router: Router) { }

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
