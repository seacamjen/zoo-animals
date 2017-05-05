import { Component } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <animal-list [childAnimalList]="allAnimals" (clickSender)="editAnimal($event)"></animal-list>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (clickSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

  allAnimals: Animal[] = [
    new Animal("Tiger", "Carnivore", "Cat", "Kitty", 2, "meat", "Siberia", 4, "Male", "beef", "carrots")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.allAnimals.push(newAnimalFromChild);
  }
}
