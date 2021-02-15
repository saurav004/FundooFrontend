import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Note } from 'src/app/models/note';
import { Label } from 'src/app/models/label';
import { EditNoteComponent } from '../editNote/editNote.component';

@Component({
  selector: 'app-ViewNote',
  templateUrl: './ViewNote.component.html',
  styleUrls: ['./ViewNote.component.scss'],
  providers: [DatePipe],
})
export class ViewNoteComponent implements OnInit {
  datetimereminder = new Date(Date.now());
  private allLabels: Label[];
  noteIdTemp: number;
  reminderData: string = "reminder";
  gridListView = false;
  getNote: Note[];
  GridListView: boolean = false;
  viewListGrid: boolean = true;

  constructor(public dialog: MatDialog, private dataService: DataService,
    private datePipe: DatePipe, private httpService: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataService.get_all_note();
    this.dataService.noteMessage.subscribe(notes => {
      this.getNote = notes;
    });
    this.dataService.gridListMessage.subscribe(view => this.viewListGrid = view);
  }

  noteColor(color) {
    const style = {
      'background-color': color,
    }
    return style;
  }

  openDialog(note) {
    const dialogRef = this.dialog.open(EditNoteComponent,
      {
        panelClass: 'edit-note-no-padding-dialog',
        height: 'auto',
        width: '50%',
        data: note,
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.dataService.updateNoteDetails(result);
    });
  }

  setPinNote(note: Note) {
    note.isPined = !note.isPined;
    let updateObject = {
      noteIdList: [note.id],
      isPined: note.isPined
    };
    let result: any = '';
    this.httpService.postRequestWithToken("notes/pinUnpinNotes", updateObject).subscribe((response) => {
      result = response;
      this.dataService.get_all_note();
    },
      (error) => { this.snackBar.open("Server Error", "Close", { duration: 2500 }) });
  }

  removeExistingLabelFromNote(note: Note, labelObject: Label) {
    const data = {
      noteId: note.id,
      labelId: labelObject.id
    }
    this.httpService.postRequestWithToken("notes/" + note.id + "/addLabelToNotes/" + labelObject.id + "/remove", data).subscribe((response) => {
      this.dataService.get_all_note();
    })
  }

  removeReminderFromNote(note:Note,reminder:any) {
    const reminderObject = {
      noteIdList: [note.id],
      userId: note.userId
    }
    this.httpService.postRequestWithToken("notes/removeReminderNotes", reminderObject).subscribe((response) => {
      this.snackBar.open("reminder remover successfully", "close", { duration: 2500 });
      this.dataService.get_all_note();
    })
  }

}
