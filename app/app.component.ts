import { Component } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container-fluid header">
  </div>
  <nav class="navbar navbar-default" data-spy="affix" data-offset-top="300">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">
          <h2>
            The Ranch Zoo
          </h2>
        </a>
      </div>
      <ul class="nav navbar-nav">
        <li>
          <a>
            <h2>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
              Add Animal
              </button>
            </h2>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <div class="row">

      <animal-list [childAnimalList]="allAnimals" (clickSender)="editAnimal($event)"></animal-list>

      <edit-animal [childSelectedAnimal]="selectedAnimal" (clickSender)="finishedEditing()"></edit-animal>

      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
              <h1 class="modal-title center" id="exampleModalLabel">
                Welcome A New Animal
              </h1>
            </div>
            <div class="modal-body">
              <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

  allAnimals: Animal[] = [
    new Animal("Tiger", "Carnivore", "Cat", "Kitty", 2, "meat", "Siberia", 4, "Male", "beef", "carrots"),
    new Animal("Tiger", "Carnivore", "Cat", "Francis", 3, "meat", "Siberia", 4, "Male", "beef", "carrots"),
    new Animal("Tiger", "Carnivore", "Cat", "Carl", 1, "meat", "Siberia", 4, "Male", "beef", "carrots")
  ];

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
