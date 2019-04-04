import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  employees : Employee[];
  private selectedEmployeeId: number;
  filteredEmployees: Employee[];
  private _searchTerm: string;

 

  get searchTerm(): string {
    return this._searchTerm;
  }

  // This setter is called everytime the value in the search text box changes
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

constructor(private _employeeService: EmployeeService,
  private _route: ActivatedRoute, private _router: Router ) { }

    // ngOnInit() {
    //   this.employees = this._employeeService.getEmployees();
    // }

    ngOnInit() {
      this.employees = this._employeeService.getEmployees();
      this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
      this._route.queryParamMap.subscribe((queryParams) => {
        if (queryParams.has('searchTerm')) {
          this.searchTerm = queryParams.get('searchTerm');
          
        } else {
          this.filteredEmployees = this.employees;
        }
      });

      // if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      //   this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
      // } else {
      //   this.filteredEmployees = this.employees;
      // }

      // this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
      // 
      // this.filteredEmployees = this.employees;
    }

    onClick(employeeId: number) {
      this._router.navigate(['employees', employeeId], {
        queryParams: { 'searchTerm': this.searchTerm }
      });

      //this._router.navigate(['/employees', employeeId]);
    }

    filterEmployees(searchString: string) {
      return this.employees.filter(employee =>
        employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
}
