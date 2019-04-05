import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule , Routes} from '@angular/router';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeService } from './employees/employee.service';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { FormsModule } from '@angular/forms';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';


const appRoutes : Routes = [
  {
    path: 'list',
    component: ListEmployeeComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  //{  path: "create" , component : CreateEmployeeComponent},
  {
    path: 'edit/:id',
    component: CreateEmployeeComponent,
  },
  {
    path: 'employees/:id', component: EmployeeDetailsComponent
  },
  {  path: "" , redirectTo : '/list' , pathMatch: 'full' }
  ];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    DisplayEmployeeComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService , EmployeeListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
