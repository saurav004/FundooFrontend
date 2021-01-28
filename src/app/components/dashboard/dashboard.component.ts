import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private obtainNotes = new BehaviorSubject([]);
  currentMessage = this.obtainNotes.asObservable();
  constructor(private snackbar: MatSnackBar,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,
    public dialog: MatDialog) { }
  appName: string;
  open: boolean;

  search = new FormControl();
  message: string;

  ngOnInit() {
    this.appName = "FundooNotes";
  }
  onNotes() {
    this.appName = "Note";
    this.router.navigate(['dashboard'])
  }

  account() {
    this.open = true;
  }
  onBlurMethod(){
    this.open = false;
  }
  data: []
  // onsearch(message: any) {
  //   console.log("on search")
  //   this.noteservice.getRequest("serach?findString=" + message).subscribe(
  //     (Response: any) => {
  //       this.data = Response;
  //       console.log(Response + "========>")
  //       console.log(this.data)
  //     }
  //   )
  // }
  onnote() {
    this.appName = "note"
  }

  labelsDisplay = [];


}
