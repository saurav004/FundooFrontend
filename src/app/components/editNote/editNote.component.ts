import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editNote',
  templateUrl: './editNote.component.html',
  styleUrls: ['./editNote.component.scss']
})
export class EditNoteComponent implements OnInit {

  title:string;
  description:string
  constructor() { }

  ngOnInit() {
  }

}
