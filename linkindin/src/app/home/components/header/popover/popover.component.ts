import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent   {

  constructor() { }



  onSignOut() {
    console.log("sing out")

  }
}
