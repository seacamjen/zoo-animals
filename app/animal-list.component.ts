import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component({
  selector: `animal-list`,
  template: `
  <h2>
    <select (change)="onChange($event.target.value)">
      <option value="allAges">All Ages</option>
      <option value="young">Young Animals</option>
      <option value="old">Old Animals</option>
    </select>
  </h2>

  <h2>
    <select (change)="onChangeDiet($event.target.value)">
      <option value="allDiets">All Diets</option>
      <option value="carnivore">Carnivore</option>
      <option value="herbivore">Herbivore</option>
      <option value="omnivore">Omnivore</option>
      <option value="fungivore">Fungivore</option>
      <option value="bacterivore">Bacterivore</option>
    </select>
  </h2>

  <div class="container">
    <div class="row">
      <div *ngFor="let currentAnimal of childAnimalList | ages:filterByAge | diet:filterByDiet">
        <div class="col-md-12">
          <div class="panel panel-success">
            <div class="panel-heading">
              <div class="panel-title">
                <h3>
                  Name: {{currentAnimal.name}}
                  <span class="center">
                    Age: {{currentAnimal.age}}
                  </span>
                  <span class="pull-right">
                    gender: {{currentAnimal.sex}}
                  </span>
                </h3>
              </div>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-5">
                  <img src="/resources/images/animal-profile.jpg" alt="Profile Picture of Animal">
                </div>
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-md-6">
                      <h2>
                        <ul>
                          <li><strong>Species:</strong> {{currentAnimal.species}}</li>
                          <li><strong>Order:</strong> {{currentAnimal.order}}</li>
                          <li><strong>Family:</strong> {{currentAnimal.family}}</li>
                        </ul>
                      </h2>
                    </div>
                    <div class="col-md-6">
                      <h2>
                        <strong>Origin:</strong> {{currentAnimal.location}}
                      </h2>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <h1 class="center">
                      Diet - {{currentAnimal.diet}}
                    </h1>
                    <h2 class="center">
                      <strong>Likes:</strong> {{currentAnimal.likes}}
                      <strong>Dislikes:</strong> {{currentAnimal.dislikes}}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-footer">
              <h3>
                Caretakers: {{currentAnimal.caretakers}}
                <button class="pull-right btn-lg" (click)="editAnimal(currentAnimal)">Edit</button>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAges";
  filterByDiet: string = "allDiets";

  onChange(optionFromAgeList) {
    this.filterByAge = optionFromAgeList;
  }

  onChangeDiet(optionFromDietList) {
    this.filterByDiet = optionFromDietList;
  }

  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
