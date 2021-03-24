import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import {FormsModule} from '@angular/forms';
import {ProgressbarComponent} from './progressbar/progressbar.component';
import {AuthorDetailComponent} from './authors/author-detail.component';
import {AuthorListComponent} from './authors/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    ProgressbarComponent,
    AuthorDetailComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
