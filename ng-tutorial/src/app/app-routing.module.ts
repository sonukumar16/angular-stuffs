import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparmentListComponent } from './components/routingExamples/deparment-list/deparment-list.component';
import { EmployeeListComponent } from './components/routingExamples/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './components/routingExamples/department-details/department-details.component';
import { DepartmentOverviewComponent } from './components/routingExamples/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/routingExamples/department-contact/department-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/departments',
    pathMatch: 'full',
  },
  {
    path: 'departments',
    component: DeparmentListComponent,
  },
  {
    path: 'departments/:id',
    component: DepartmentDetailsComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent },
    ],
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DeparmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailsComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
];
