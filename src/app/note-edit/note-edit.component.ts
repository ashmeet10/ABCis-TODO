import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})

export class NoteEditComponent implements OnInit {

  noteForm: FormGroup;
  id: number = null;
  description: string = '';
  createdBy: string = '';
  RemindAt: Date = null;
  isEnabled: boolean = null;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: NoteService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getNote(this.route.snapshot.params['id']);

    this.noteForm = this.formBuilder.group({
      'description': [null, Validators.required],
      'createdBy': [null, Validators.required],
      'RemindAt': [null, Validators.required],
      'isEnabled': [null, Validators.required]

    });
  }

  getNote(id: number) {
    this.api.getNote(id).subscribe(data => {
      this.id = id;
      console.log(data)
      // this.noteForm.setValue({
      //   description: data.description,
      //   createdBy: data.createdBy,
      //   RemindAt: data.RemindAt,
      //   isEnabled:data.isEnabled
      // });
    });
  }


  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateNote(this.id, form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/note-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }

  noteDetails() {
    this.router.navigate(['/note-details', this.id]);
  }

}
