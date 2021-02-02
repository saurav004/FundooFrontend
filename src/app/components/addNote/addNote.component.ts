import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addNote',
  templateUrl: './addNote.component.html',
  styleUrls: ['./addNote.component.scss']
})
export class AddNoteComponent implements OnInit {
  showNoteContent = true;
  isOpen = false;
  content = new FormControl('');
  token: string;
  constructor(public router: Router, private snackBar: MatSnackBar) { }
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
    this.isOpen=false;
  }
}
