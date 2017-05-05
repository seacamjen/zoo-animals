import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h2>Edit: {{childSelectedAnimal.name}}</h2>
      <label>Enter Name:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
      <label>Enter Age:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
      <label>Enter Number of Caretakers:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
      <button class="btn btn-default" (click)="finishedEditing()">Save</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() clickSender = new EventEmitter();

  finishedEditing() {
    this.clickSender.emit();
  }
}
