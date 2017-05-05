import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>
  <div>
    <label>Enter Species:</label>
    <input #newSpecies>
  </div>
  <div>
    <label>Enter Order:</label>
    <input #newOrder>
  </div>
  <div>
    <label>Enter Family:</label>
    <input #newFamily>
  </div>
  <div>
    <label>Enter Name:</label>
    <input #newName>
  </div>
  <div>
    <label>Enter Age:</label>
    <input #newAge>
  </div>
  <div>
    <label>Enter Diet:</label>
    <input #newDiet>
  </div>
  <div>
    <label>Enter Location:</label>
    <input #newLocation>
  </div>
  <div>
    <label>Enter Number of Caretakers:</label>
    <input #newCaretakers>
  </div>
  <div>
    <label>Enter Sex:</label>
    <input #newSex>
  </div>
  <div>
    <label>Enter Likes:</label>
    <input #newLikes>
  </div>
  <div>
    <label>Enter Dislikes:</label>
    <input #newDislikes>
  </div>
  <button class="btn btn-default" (click)="submit(newSpecies.value, newOrder.value, newFamily.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newOrder.value=''; newFamily.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submit(species: string, order: string, family: string, name: string, age: string, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, order, family, name, parseInt(age), diet, location, parseInt(caretakers), sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
