import { Note } from 'src/app/models/note';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-editNote',
  templateUrl: './editNote.component.html',
  styleUrls: ['./editNote.component.scss'],
  providers: [DatePipe]
})
export class EditNoteComponent implements OnInit {
  public editNote: Note;
  title: string;
  description: string;
  ngOnDestroy() {
    this.closeDialog();
  }
  constructor(public dialogRef: MatDialogRef<EditNoteComponent>, @Inject(MAT_DIALOG_DATA) public data: Note) { }

  ngOnInit() {
    this.editNote = this.data;
  }

  closeDialog() {
    let updateObject = {
      noteId: this.editNote.id,
      title: this.editNote.title,
      description: this.editNote.description,
    }
    this.dialogRef.close(updateObject);
  }

  dialogColor() {
    return {
      'background-color': this.data.color,
    }
  }
}

