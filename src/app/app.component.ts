import { Component } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'Decorator'; 
 parentData: number = 1

 receivedMessage: string = '';

 onMessageReceived(message: string) {
   this.receivedMessage = message;  // Handle the message received from child
 }
}
