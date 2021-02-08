/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { AppComponent } from 'src/app/app.component';
import { AddNoteComponent } from '../addNote/addNote.component';
import { ArchiveComponent } from '../archive/archive.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditLabelsComponent } from '../editLabels/editLabels.component';
import { LoginComponent } from '../login/login.component';
import { NotesOfCertainLabelComponent } from '../notesOfCertainLabel/notesOfCertainLabel.component';
import { RegisterComponent } from '../register/register.component';
import { RemindersComponent } from '../reminders/reminders.component';
import { SearchComponent } from '../search/search.component';
import { SetPasswordComponent } from '../setPassword/set-password.component';
import { TitleComponent } from '../title/title.component';
import { TrashComponent } from '../trash/trash.component';
import { ViewNoteComponent } from '../viewNote/ViewNote.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent,
        RegisterComponent,
        ViewNoteComponent,
        AppComponent,
        AddNoteComponent,
        EditLabelsComponent,
        NotesOfCertainLabelComponent,
        SearchComponent,
        TrashComponent,
        ArchiveComponent,
        RemindersComponent,
        DashboardComponent,
        SetPasswordComponent,
        LoginComponent,
        TitleComponent,],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
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
        MatDialogModule
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
