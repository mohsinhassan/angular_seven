import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  private id;

   constructor(private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router) { }

  // ngOnInit() {
  //    this.id = +this._route.snapshot.paramMap.get('id');
  //   this.employee = this._employeeService.getEmployee(this.id);
    
  // } 

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = +params['id'];
      this.employee = this._employeeService.getEmployee(this.id);
    });
  }


  getNextEmployee() {
    if (this.id < 3) {
      this.id = this.id + 1;
    } else {
      this.id = 1;
    }
    this._router.navigate(['/employees', this.id], {
      queryParamsHandling: 'preserve'
    });
  }

}
