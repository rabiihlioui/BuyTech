import { Component, OnInit } from '@angular/core';
import { ActivateMenuItemService } from 'src/app/services/activate-menu-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public activateMenuItemService: ActivateMenuItemService
  ) { }

  ngOnInit() {
  }

}
