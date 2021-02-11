import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { DatePipe } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Note } from 'src/app/models/note';
import { Label } from 'src/app/models/label';

@Component({
  selector: 'app-ViewNote',
  templateUrl: './ViewNote.component.html',
  styleUrls: ['./ViewNote.component.scss'],
  providers: [DatePipe],
})
export class ViewNoteComponent implements OnInit  {
  datetimereminder = new Date(Date.now());
  private allLabels: Label[];
  noteIdTemp: number;
  reminderData: string;
  gridListView = false;
  getNote: Note[];

  GridListView: boolean = false;
  viewListGrid: boolean=true;



  constructor(public dialog: MatDialog, private dataService: DataService,
    private datePipe: DatePipe, private httpService: HttpService) { }

  ngOnInit() {
    this.dataService.noteMessage.subscribe(notes => this.getNote = notes);
    this.dataService.gridListMessage.subscribe(view => this.viewListGrid= view);
  }


  setPinNote(note) {
    const data = {
      dataForUpdate: { isPined: !note.isPined },
    };

  }
  
  setReminder(note) {

  }

  getReminder(reminder) {

  }


  addedLabel(note, updatelabel) {

  }

  removeLable(note, labelToDelete) {

  }

  addLabel(note, newLabel) {

  }


  moveTrash(note) {

  }

  noteColor(color) {
    const style = {
      'background-color': color,
    }
    return style;
  }

  archiveNote(note) {
  }

  changeColor(note, color) {

  }
  getFile(note) {

  }

  onFileSelected(target) {

  }




}
