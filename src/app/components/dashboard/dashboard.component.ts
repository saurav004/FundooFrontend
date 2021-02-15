import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
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
  isPristine = true;
  mobileQuery: MediaQueryList;
  getLabels = []
  search:any=null;

  constructor(private snackbar: MatSnackBar,private dataService: DataService, media: MediaMatcher, changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder,
    public dialog: MatDialog, private fb: FormBuilder) {
  }
  appName: string;
  open: boolean;
  isGridView: boolean = true;
  message: string;

  ngOnInit() {
    this.appName = "FundooNotes";
    this.dataService.gridListMessage.subscribe(view => this.isGridView= view);
  }


  onNotes() {
    this.appName = "Note";
    this.router.navigate(['dashboard'])
  }

  viewChange() {
    this.isGridView = !this.isGridView;
    this.dataService.changeView(this.isGridView);

  }

  onBlurAccount() {
    this.open = false;
  }
  data: []

  labelsDisplay = [{ "lableName": "label" }, { "lableName": "label" }, { "lableName": "label" }];
}
