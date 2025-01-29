import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Santosh';
  
  changeName(button:HTMLInputElement){
  this.title ="Shinde"
  console.log(button.value)

  }
}
