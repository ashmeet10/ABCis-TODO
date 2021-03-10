import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})

export class NoteDetailsComponent implements OnInit {

  note: Note = { id: '', description: '', createdBy: '', RemindAt: null, isEnabled:null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: NoteService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getNoteDetails(this.route.snapshot.params['id']);
  }

  getNoteDetails(id) {
    this.api.getNote(id)
      .subscribe(data => {
        this.note = data;
        console.log(this.note);
        this.isLoadingResults = false;
      });
  }
}
