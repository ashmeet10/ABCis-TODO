import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'createdBy', 'RemindAt', 'isEnabled'];
  notes: Note[] = [];
  errorMessage: string;
  isLoadingResults = false;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

    // ... Get all Items from API
    this.noteService.getNotes()
      .subscribe({
        next: notes => {
          this.notes = notes;
          this.isLoadingResults = true;
        },

        error: err => this.errorMessage = err
      });
  }
}
