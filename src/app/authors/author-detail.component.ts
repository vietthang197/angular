import {Component, EventEmitter, Input, Output} from '@angular/core';
import Author from '../author-model';

@Component({
  selector: 'app-author-detail',
  template: `
    <div class="container">
      <p>Author detail component</p>
      <p>ID: {{author.id}}</p>
      <p>FirstName: {{author.firstName}}</p>
      <p>LastName: {{author.lastName}}</p>
      <p>Address: {{author.address}}</p>
      <button class="bg-blue-500 text-white" (click)="dataSelected.emit(author)">select this</button>
      <button class="bg-green-500 text-white" (click)="deleteItem.emit(author.id)">x</button>
    </div>
  `,
  styles: [`.container {border: 1px solid black;}`]
})
export class AuthorDetailComponent {
  @Input() author: Author;
  @Output() dataSelected = new EventEmitter<Author>();
  @Output() deleteItem = new EventEmitter<number>();
}
