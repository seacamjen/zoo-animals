import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component({
  selector: 'new-animal',
  template: `
  <div>
    <h1 class="center">Animal Info</h1>
    <h2>
      <div>
        <label>Species:</label>
        <input #newSpecies placeholder="tigris">
      </div>
      <div>
        <label>Order:</label>
        <input #newOrder placeholder="Carnivora">
      </div>
      <div>
        <label>Family:</label>
        <input #newFamily placeholder="Felidae">
      </div>
      <div>
        <label>Name:</label>
        <input #newName placeholder="Spots">
      </div>
      <div>
        <label>Age:</label>
        <input #newAge placeholder="2">
      </div>
      <div>
        <label>Diet:</label>
        <input #newDiet placeholder="Carnivore, Herbivore">
      </div>
      <div>
        <label>Location:</label>
        <input #newLocation placeholder="Rocky Mountains">
      </div>
      <div>
        <label>Caretakers:</label>
        <input #newCaretakers placeholder="5">
      </div>
      <div>
        <label>Sex:</label>
        <input #newSex placeholder="Female">
      </div>
      <div>
        <label>Likes:</label>
        <input #newLikes placeholder="Live Mice">
      </div>
      <div>
        <label>Dislikes:</label>
        <input #newDislikes placeholder="Raw Spinach">
      </div>
    </h2>
    <div class="modal-footer">
      <button data-dismiss="modal" class="btn btn-success btn-lg" (click)="submit(newSpecies.value, newOrder.value, newFamily.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newOrder.value=''; newFamily.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
      <button type="button" class="btn btn-lg btn-default" data-dismiss="modal">Close</button>
    </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submit(species: string, order: string, family: string, name: string, age: string, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, order, family, name, parseInt(age), diet, location, parseInt(caretakers), sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }

}
