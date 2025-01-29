import { Component ,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  //get data to parent
@Input() childData: number = 0
//pass data from child to parent
@Output() messageEvent = new EventEmitter<string>();  // Declare EventEmitter

sendMessage() {
  this.messageEvent.emit('Hello from Child!');  // Emit event with a message
}

}
