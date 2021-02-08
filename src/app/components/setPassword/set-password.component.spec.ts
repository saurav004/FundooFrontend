import { ActivatedRoute, RouterModule } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { SetPasswordComponent } from './set-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AddNoteComponent } from '../addNote/addNote.component';
import { ArchiveComponent } from '../archive/archive.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditLabelsComponent } from '../editLabels/editLabels.component';
import { ForgotPasswordComponent } from '../forgotPassword/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { NotesOfCertainLabelComponent } from '../notesOfCertainLabel/notesOfCertainLabel.component';
import { RegisterComponent } from '../register/register.component';
import { RemindersComponent } from '../reminders/reminders.component';
import { SearchComponent } from '../search/search.component';
import { TitleComponent } from '../title/title.component';
import { TrashComponent } from '../trash/trash.component';
import { ViewNoteComponent } from '../viewNote/ViewNote.component';

describe('SetPasswordComponent', () => {
  let component: SetPasswordComponent;
  let fixture: ComponentFixture<SetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetPasswordComponent,
        ViewNoteComponent,
        AppComponent,
        RegisterComponent,
        AddNoteComponent,
        EditLabelsComponent,
        NotesOfCertainLabelComponent,
        SearchComponent,
        TrashComponent,
        ArchiveComponent,
        RemindersComponent,
        DashboardComponent,
        ForgotPasswordComponent,
        LoginComponent,
        TitleComponent,],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [RouterTestingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        RouterTestingModule,
        MatTooltipModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        MatCheckboxModule,
        AppRoutingModule,
        MatDialogModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
