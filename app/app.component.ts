import { Component } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component ({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default" data-spy="affix" data-offset-top="300">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">The Ranch Zoo</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a (click)="showAnimalForm()">Add Animal</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <new-animal [animalFormShow]="viewAnimalForm" (cancelAddForm)="hideAnimalForm()" (newAnimalSender)="addAnimal($event)"></new-animal>

      <animal-list [childAnimalList]="allAnimals" (clickSender)="editAnimal($event)"></animal-list>

      <edit-animal [childSelectedAnimal]="selectedAnimal" (clickSender)="finishedEditing()"></edit-animal>

    </div>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  viewAnimalForm = false;

  allAnimals: Animal[] = [
    new Animal("Tiger", "Carnivore", "Cat", "Kitty", 2, "meat", "Siberia", 4, "Male", "beef", "carrots"),
    new Animal("Tiger", "Carnivore", "Cat", "Francis", 3, "meat", "Siberia", 4, "Male", "beef", "carrots"),
    new Animal("Tiger", "Carnivore", "Cat", "Carl", 1, "meat", "Siberia", 4, "Male", "beef", "carrots")
  ];

  showAnimalForm() {
    this.viewAnimalForm = true;
  }

  hideAnimalForm() {
    this.viewAnimalForm = false;
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.allAnimals.push(newAnimalFromChild);
    this.viewAnimalForm = false;
  }
}
