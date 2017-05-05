import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component({
  selector: `animal-list`,
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAges">All Ages</option>
    <option value="young">Young Animals</option>
    <option value="old">Old Animals</option>
  </select>

  <div *ngFor="let currentAnimal of childAnimalList | ages:filterByAge">
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

  filterByAge: string = "allAges";

  onChange(optionFromAgeList) {
    this.filterByAge = optionFromAgeList;
  }

  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
