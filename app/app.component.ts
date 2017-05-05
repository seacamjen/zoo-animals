import { Component } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <animal-list [childAnimalList]="allAnimals"></animal-list>
    </div>
  </div>
  `
})

export class AppComponent {
  allAnimals: Animal[] = [
    new Animal("Tiger", "Carnivore", "Cat", "Kitty", 2, "meat", "Siberia", 4, "Male", "beef", "carrots")
  ];
  selectedAnimal = null;
}
