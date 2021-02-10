import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public viewListGridMessage = false; // parent to child communication

  isPristine = true;
  mobileQuery: MediaQueryList;
  getLabels = []
  HeaderName = 'Fundoo';
  search:any=null;

  constructor(private snackbar: MatSnackBar,private dataService: DataService, media: MediaMatcher, changeDetectorRef: ChangeDetectorRef,
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

  ngDoCheck() {
      this.dataService.gridListView = this.viewListGridMessage;
    }

  onNotes() {
    this.appName = "Note";
    this.router.navigate(['dashboard'])
  }

  grid_list() {
    this.isView = !this.isView;
  }

  account() {
    this.open = true;
  }
  onBlurAccount() {
    this.open = false;
  }
  data: []

  labelsDisplay = [{ "lableName": "label" }, { "lableName": "label" }, { "lableName": "label" }];
}
