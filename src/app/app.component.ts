import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //multiline html using ` operator
  //template: `<h1>Hello world from inline template!</h1>`
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
