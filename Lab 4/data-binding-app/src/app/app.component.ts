import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  counter: number = 0;
  hide: boolean = false;

  OnClicked() {
    this.counter++;
  }
  OnDoubleClick() {
    console.log("Image double clicked");
    this.hide = !this.hide;
  }
}
