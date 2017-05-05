import { Component, Input } from '@angular/core';
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
    </p>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

}
