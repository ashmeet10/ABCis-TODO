import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteComponent } from './notes/note.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';


const routes: Routes= [
  {
    path: ' ',
    component: NoteComponent,
    data: { title: 'List of ToDo Items' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(routes),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
