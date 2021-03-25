import {Component} from '@angular/core';
import Author, {authors} from '../author-model';

@Component({
  selector: 'app-author-list',
  template: `
    <app-author-detail *ngFor="let author of authors" [author]="author" (deleteItem)="onDelete($event)" (dataSelected)="onSelected($event)"></app-author-detail>
    <p>The selected item is: {{currentAuthor.firstName + ' ' + currentAuthor.lastName}}</p>
  `
})

export class AuthorListComponent {
  authors = authors;
  authorIndex = 0;
  currentAuthor = authors[this.authorIndex];

  nextAuthor = () => {
    this.authorIndex += 1;
    if (this.authorIndex === authors.length) {
      this.authorIndex = 0;
    }
    this.currentAuthor = authors[this.authorIndex];
  }

  onSelected = (selectedAuthor: Author) => {
    this.currentAuthor = selectedAuthor;
  }

  onDelete = (authorId: number) => {
    authors.splice(authors.findIndex(item => item.id === authorId), 1);
        // console.log(authors.findIndex(item => item.id === authorId))
        // console.log(authors);
    alert(authorId);
  }
}
