import { Label } from 'src/app/models/label';
import { DataService } from 'src/app/services/data.service';
import { Note } from 'src/app/models/note';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noteToolBar',
  templateUrl: './noteToolBar.component.html',
  styleUrls: ['./noteToolBar.component.scss']
})
export class NoteToolBarComponent implements OnInit {
  @Input() note: Note;
  allLabels:Label[]=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  archiveNote() {
    this.note.isArchived = !this.note.isArchived;
    this.dataService.changeColor(this.note);
  }

  changeColor(color:any) {
    this.note.color = color;
    this.dataService.changeColor(this.note);
  }

  addedLabel(noteToAddLabel:Note,labelName:string){

  }

  addOrEditNote(){
    
  }

  moveTrash(noteToTrash:Note){

  }
}
