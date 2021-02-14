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
  allLabels: Label[] = [{label:"label1",id:"1",isDeleted:true},{label:"label2",id:"2",isDeleted:true}];
  datetimereminder: string = "";
  createLabelObject:Label=new Label();
  constructor(private dataService: DataService, private httpService: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
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


  addedLabel(noteToAddLabel: Note, labelName: string) {

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

  setReminder() {

  }
}
