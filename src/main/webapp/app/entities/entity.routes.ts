import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'employeeManagementApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'country',
    data: { pageTitle: 'employeeManagementApp.country.home.title' },
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'employeeManagementApp.department.home.title' },
    loadChildren: () => import('./department/department.routes'),
  },
  {
    path: 'employee',
    data: { pageTitle: 'employeeManagementApp.employee.home.title' },
    loadChildren: () => import('./employee/employee.routes'),
  },
  {
    path: 'job',
    data: { pageTitle: 'employeeManagementApp.job.home.title' },
    loadChildren: () => import('./job/job.routes'),
  },
  {
    path: 'job-history',
    data: { pageTitle: 'employeeManagementApp.jobHistory.home.title' },
    loadChildren: () => import('./job-history/job-history.routes'),
  },
  {
    path: 'location',
    data: { pageTitle: 'employeeManagementApp.location.home.title' },
    loadChildren: () => import('./location/location.routes'),
  },
  {
    path: 'region',
    data: { pageTitle: 'employeeManagementApp.region.home.title' },
    loadChildren: () => import('./region/region.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'employeeManagementApp.task.home.title' },
    loadChildren: () => import('./task/task.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
