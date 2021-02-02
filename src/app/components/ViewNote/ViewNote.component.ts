import { DatePipe } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-ViewNote',
  templateUrl: './ViewNote.component.html',
  styleUrls: ['./ViewNote.component.scss'],
  providers: [DatePipe],
})
export class ViewNoteComponent implements OnInit, DoCheck {
   datetimereminder = new Date(Date.now());

   noteIdTemp: number;
   reminderData: string;
   gridListView = false;


   viewListGrid: boolean=false;


  ngDoCheck() {
  }
  constructor(public dialog: MatDialog,
    private datePipe: DatePipe,) { }

  ngOnInit() {
  }
  setPinNote(note) {
    const data = {
      dataForUpdate: {is_pin: !note.is_pin},
      urlCridetial: note,
      showMessage: ''
    };

  }
  setReminder(note) {
    const data = {
      dataForUpdate: {reminder: this.datePipe.transform(this.datetimereminder.toISOString(), 'yyyy-MM-dd HH:mm:ss')},
      urlCridetial: note,
      showMessage: ''
    };
  }

  getReminder(reminder) {
    if (reminder !== null && ((Date.parse(reminder) / 1000) - (Date.now() / 1000)) > 0) {
      this.reminderData =  this.datePipe.transform(reminder, 'd MMM hh:mm a  ');
      return true;
    }
    return false;
  }


  addedLabel(note, updatelabel) {
    let noteLabels = note.label;
    if (noteLabels.includes(updatelabel)) {
      noteLabels = noteLabels.filter(label => label !== updatelabel);
    } else {
      noteLabels = noteLabels.concat([updatelabel]);
    }
  }

  removeLable(note, labelToDelete) {
    let labelList = [...note.label];
    labelList = labelList.filter(label => label !== labelToDelete);
    const data = {
      dataForUpdate: { label: labelList },
      urlCridetial: note,
      showMessage: ''
    };
  }

  addLabel(note, newLabel) {
    const labelList = [...note.label];
    labelList.push(newLabel);
    const data = {
      dataForUpdate: { label: labelList },
      urlCridetial: note,
      showMessage: ''
    };
  }


  moveTrash(note) {
    const noteDetail = {
      is_trashed: true
    };
  }

  noteColor(color) {
    const style = {
      'background-color': color,
    };
    return style;
  }

  archiveNote(note) {
    const noteDetail = {
      is_archive: true
    };
  }

  changeColor(note, color) {
    const noteDetail = {
    change_color: color
    };
    const data = {
      dataForUpdate: noteDetail,
      urlCridetial: note,
      showMessage: ''
    };
    // this.dataservice.updateNoteDetails(data);
  }
  getFile(note) {
    this.noteIdTemp = note;
    document.getElementById('setNoteImage').click();
  }

  onFileSelected(target) {
    const noteImage = target.files[0];
    const uploadData = new FormData();
    uploadData.append('image', noteImage, noteImage.name);
    const data = {
      dataForUpdate: uploadData,
      urlCridetial: this.noteIdTemp,
      showMessage: 'Image added'
    };
  }


  

}
