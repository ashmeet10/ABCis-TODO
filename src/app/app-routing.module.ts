import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NoteAddComponent } from './note-add/note-add.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteComponent } from './notes-list/note.component';

const routes: Routes = [

  {
    path: '',
    component: NoteComponent,
    data: { title: 'List of ToDo Items' }
  },
  {
    path: 'note-details/:id',
    component: NoteDetailsComponent,
    data: { title: 'ToDo Item Details' }
  },
  {
    path: 'note-add',
    component: NoteAddComponent,
    data: { title: 'Add ToDo Item' }
  },
  {
    path: 'note-edit/:id',
    component: NoteEditComponent,
    data: { title: 'Edit Todo' }
  },
  {
    path: '',
    redirectTo: ' ',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
