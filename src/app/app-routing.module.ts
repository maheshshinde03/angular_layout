import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Add child routes here
       { path: 'dashboard', component: DashboardComponent },
       { path: 'setting', component: SettingComponent },
      // { path: 'settings', component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }