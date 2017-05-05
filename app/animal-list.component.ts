import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component({
  selector: `animal-list`,
  template: `
  <div *ngFor="let currentAnimal of childAnimalList">
    <p>
      {{currentAnimal.name}}
      {{currentAnimal.species}}
      {{currentAnimal.order}}
      {{currentAnimal.family}}
      {{currentAnimal.age}}
      {{currentAnimal.diet}}
      {{currentAnimal.location}}
      {{currentAnimal.caretakers}}
      {{currentAnimal.sex}}
      {{currentAnimal.likes}}
      {{currentAnimal.dislikes}}
      <button (click)="editAnimal(currentAnimal)">Edit</button>
    </p>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
