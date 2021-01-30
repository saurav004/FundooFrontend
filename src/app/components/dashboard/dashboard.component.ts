import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  getLabels=[]
  HeaderName = 'Fundoo'
  private obtainNotes = new BehaviorSubject([]);
  currentMessage = this.obtainNotes.asObservable();
  private _mobileQueryListener: () => void;
  constructor(private snackbar: MatSnackBar,media: MediaMatcher,changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,
    public dialog: MatDialog) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
     }
  appName: string;
  open: boolean;
  isView:Boolean=true;

  search = new FormControl();
  message: string;

  ngOnInit() {
    this.appName = "FundooNotes";
  }
  onNotes() {
    this.appName = "Note";
    this.router.navigate(['dashboard'])
  }
  grid_list(){
    this.isView = !this.isView;
    console.log('view is ',this.isView);
  }

  account() {
    this.open = true;
  }
  onBlurAccount(){
    this.open = false;
  }
  data: []

  labelsDisplay = [];


}
