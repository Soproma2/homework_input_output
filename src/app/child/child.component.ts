import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Output() colorChange=new EventEmitter<string>();

changeColor(color:string){
  this.colorChange.emit(color);
}
}
