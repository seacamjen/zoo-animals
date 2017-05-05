import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './zoo-animals.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
        <h1 class="modal-title center" id="exampleModalLabel">Edit {{childSelectedAnimal.name}}'s Info</h1>
      </div>
      <div class="modal-body">
        <h2>
          <div *ngIf="childSelectedAnimal">
            <label>New Name:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
            <label>New Age:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.age">
            <label>New Number of Caretakers:</label>
            <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
          </div>
        </h2>
      </div>
      <div class="modal-footer">
        <button data-dismiss="modal" class="btn btn-default" (click)="finishedEditing()">Save</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() clickSender = new EventEmitter();

  finishedEditing() {
    this.clickSender.emit();
  }
}
