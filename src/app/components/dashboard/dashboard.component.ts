import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  getLabels = []
  HeaderName = 'Fundoo';
  search:any=null;

  constructor(private snackbar: MatSnackBar, media: MediaMatcher, changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,
    public dialog: MatDialog, private fb: FormBuilder) {
  }
  appName: string;
  open: boolean;
  isView: Boolean = true;
  message: string;

  ngOnInit() {
    this.appName = "FundooNotes";
    
  }
  onNotes() {
    this.appName = "Note";
    this.router.navigate(['dashboard'])
  }
  grid_list() {
    this.isView = !this.isView;
    console.log('view is ', this.isView);
  }

  account() {
    this.open = true;
  }
  onBlurAccount() {
    this.open = false;
  }
  data: []

  labelsDisplay = [{ "lableName": "Sachin" }, { "lableName": "Tendulkar" }, { "lableName": "Tendulkar" }
    , { "lableName": "Tendulkar" }, { "lableName": "Tendulkar" }, { "lableName": "Tendulkar" }, { "lableName": "Tendulkar" }];
}
