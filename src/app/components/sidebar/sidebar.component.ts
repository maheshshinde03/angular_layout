import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sideBarStatus : boolean = false;

   list = [
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer',
      link: '/dashboard'
    },
    {
      title: 'Management',
      icon: 'fa fa-user',
      link: '/user-management'
    },
    {
      title: 'Setting',
      icon: 'fa fa-cog',
      link: '/setting'
    }
   ]
}
