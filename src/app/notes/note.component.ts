import { Component, OnInit } from '@angular/core';
import { INote } from './note';
import {NoteService} from './note.service';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit{

  displayedColumns: string[] = ['id', 'description', 'createdBy','RemindAt','isEnabled'];

  notes: INote[] = [];
  errorMessage:string;

  constructor( private noteService:NoteService){
    
 }
  
  ngOnInit():void{
  
    this.noteService.getNotes().subscribe({
    next: notes => {
      this.notes = notes;
    },
   
    error: err => this.errorMessage = err
    });

}}
