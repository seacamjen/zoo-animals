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

  <div class="container">
    <div class="row">
      <div *ngFor="let currentAnimal of childAnimalList | ages:filterByAge">
        <div class="col-md-6">
          <div class="panel panel-success">
            <div class="panel-heading">
              <div class="panel-title">
                {{currentAnimal.name}} - {{currentAnimal.age}}
                <span class="pull-right">gender: {{currentAnimal.sex}}</span>
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
                      <ul>
                        <li><strong>Species:</strong> {{currentAnimal.species}}</li>
                        <li><strong>Order:</strong> {{currentAnimal.order}}</li>
                        <li><strong>Family:</strong> {{currentAnimal.family}}</li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <strong>Origin:</strong> {{currentAnimal.location}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <h5>Diet</h5>
                    <p>
                      {{currentAnimal.diet}}
                      <strong>Likes:</strong> {{currentAnimal.likes}}
                      <strong>Dislikes:</strong> {{currentAnimal.dislikes}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-footer">
              caretakers: {{currentAnimal.caretakers}}
              <button class="pull-right" (click)="editAnimal(currentAnimal)">Edit</button>
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

  onChange(optionFromAgeList) {
    this.filterByAge = optionFromAgeList;
  }

  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
