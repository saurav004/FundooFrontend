import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-addNote',
  templateUrl: './addNote.component.html',
  styleUrls: ['./addNote.component.scss']
})
export class AddNoteComponent implements OnInit {
  showNoteContent = false;
  content = new FormControl('');
  token: string;
  private noteData: Note = new Note();
  private allNotes: Note[];
  constructor(public router: Router, private snackBar: MatSnackBar,private httpService:HttpService) { }
  title = new FormControl('', [Validators.required])
  description = new FormControl('', [Validators.required])
  setcolor;
  ngOnInit() {
  }
  @Output() refreshEvent = new EventEmitter<any>();



  addNote() {
    var form_contents = {
      "title": this.title.value,
      "description": this.description.value
    }
    console.log(form_contents)
    if (this.title.value == '' || this.description.value == '') {
      // this.snackBar.open("title and description is required...","close", {
      // duration: 3000,
      // });
    }
  }
  blurred(){
    this.showNoteContent=false;
  }

  showHideButton() {
    this.showNoteContent = this.showNoteContent ? false : true;

    if (!this.showNoteContent) {
      this.noteData.title = this.title.value;
      this.noteData.description = this.description.value;
      // if user enter note title or note description then add note
      if (this.noteData.title !== '' || this.noteData.description !== '') {
        // post data on backend api
        this.httpService.postRequestWithToken("notes/addNotes",this.noteData).subscribe(
          result => {
            this.snackBar.open('Note successfully added', 'close')
              ._dismissAfter(2500);
            this.allNotes.push(result.data);
          },
          err => {
            // print if error occur during add note data  in database
            console.log(err);
            this.snackBar.open('Error: Failed to store data on database')._dismissAfter(2500);
          }
        );
        /*
          Resets the form control, marking it pristine and untouched, and setting the value to null.
        */
        this.title.setValue('');
        this.description.setValue('');
      }
    }
  }
}
