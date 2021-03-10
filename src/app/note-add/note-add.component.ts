import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  noteForm: FormGroup;
  id: number = null;
  description: string = '';
  createdBy: string = '';
  RemindAt: Date = null;
  isEnabled: boolean = null;
  isLoadingResults = false;

  constructor(private router: Router, private api: NoteService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      'description': [null, Validators.required],
      'createdBy': [null, Validators.required],
      'RemindAt': [null, Validators.required],
      'isEnabled': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addNote(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/note-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}

