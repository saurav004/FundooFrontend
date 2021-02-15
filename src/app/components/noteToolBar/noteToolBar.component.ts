import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpService } from './../../services/http.service';
import { Label } from 'src/app/models/label';
import { DataService } from 'src/app/services/data.service';
import { Note } from 'src/app/models/note';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-noteToolBar',
  templateUrl: './noteToolBar.component.html',
  styleUrls: ['./noteToolBar.component.scss']
})
export class NoteToolBarComponent implements OnInit {
  @Input() note: Note;
  allLabels: Label[] = [{ label: "label1", id: "1", isDeleted: true }, { label: "label2", id: "2", isDeleted: true }];
  datetimereminder: string = "";
  createLabelObject: Label = new Label();
  reminderDate: Date;
  dateForm: FormGroup;
  date: FormControl;

  constructor(private dataService: DataService, private httpService: HttpService, private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.date = new FormControl(this.note.reminder);
  }

  archiveNote() {
    this.note.isArchived = !this.note.isArchived;
    let updateData = {
      noteIdList: [this.note.id],
      isArchived: this.note.isArchived
    }
    let result: any = "";
    this.httpService.postRequestWithToken("notes/archiveNotes", updateData).subscribe((response) => {
      result = response;
      this.dataService.get_all_note();
    },
      (error) => { this.snackBar.open("Server Error", "Close", { duration: 2500 }) });

  }

  changeColor(color: any) {
    this.note.color = color;
    let updateData = {
      noteIdList: [this.note.id],
      color: this.note.color
    }
    let result: any = "";
    this.httpService.postRequestWithToken("notes/changesColorNotes", updateData).subscribe((response) => {
      result = response;
      this.dataService.get_all_note();
    },
      (error) => {
        this.snackBar.open("Server Error", "Close", { duration: 2500 })
      });
  }


  addLabel() {
    this.httpService.postRequestWithToken("notes/" + this.note.id + "/noteLabels", this.createLabelObject).subscribe(
      (response) => {
        this.snackBar.open("label added", "close", { duration: 2000 });
        this.dataService.get_all_note();
      },
      err => {
        this.snackBar.open("Adding Label Failed", "close", { duration: 2000 });
      });
  }

  addOrEditNote() {
  }

  trashRestore() {
    this.note.isDeleted = !this.note.isDeleted;
    let updatedata = {
      "noteIdList": [this.note.id],
      "isDeleted": this.note.isDeleted
    }
    let result;
    this.httpService.postRequestWithToken("notes/trashNotes", updatedata).subscribe((response) => {
      result = response;
      this.dataService.get_all_note();
    },
      (error) => {
        this.snackBar.open("Server Error", "close", { duration: 2500 })
      })
  }

  addExistingLabelToNote(labelObject: Label) {
    const data = {
      noteId: this.note.id,
      labelId: labelObject.id
    }
    this.httpService.postRequestWithToken("notes/" + this.note.id + "/addLabelToNotes/" + labelObject.id + "/add", data).subscribe((response) => {
      this.dataService.get_all_note();
    })
  }

  removeExistingLabelFromNote(labelObject: Label) {
    const data = {
      noteId: this.note.id,
      labelId: labelObject.id
    }
    this.httpService.postRequestWithToken("notes/" + this.note.id + "/addLabelToNotes/" + labelObject.id + "/remove", data).subscribe((response) => {
      this.dataService.get_all_note();
    })

  }

  addUpdateReminder() {
    const reminderObject = {
      reminder: [this.date.value],
      noteIdList: [this.note.id],
      userId: this.note.userId
    }
    this.httpService.postRequestWithToken("/notes/addUpdateReminderNotes", reminderObject).subscribe((response) => {
      this.snackBar.open("reminder added", "close", { duration: 2500 });
      this.dataService.get_all_note();
    })
  }
}
