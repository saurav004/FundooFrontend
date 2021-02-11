import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noteToolBar',
  templateUrl: './noteToolBar.component.html',
  styleUrls: ['./noteToolBar.component.scss']
})
export class NoteToolBarComponent implements OnInit {
  isArchived: boolean = false;
  color: string="#FFFFFF";
  constructor() { }

  ngOnInit() {
  }
  archiveNote() {
    this.isArchived = !this.isArchived;
  }
  changeColor(color) {
    this.color = color;
  }
  addOrEditNote(){
    
  }
}
