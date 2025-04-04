import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<boolean>();
  menuStatus: boolean = false

  sidebarToggle(){
    this.menuStatus = !this.menuStatus;
    this.toggleSidebar.emit(this.menuStatus);
  }
}
