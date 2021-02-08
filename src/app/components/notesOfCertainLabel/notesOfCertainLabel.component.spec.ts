/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotesOfCertainLabelComponent } from './notesOfCertainLabel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatTooltipModule, MatListModule, MatSidenavModule, MatToolbarModule, MatSnackBarModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatCardModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AddNoteComponent } from '../addNote/addNote.component';
import { ArchiveComponent } from '../archive/archive.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditLabelsComponent } from '../editLabels/editLabels.component';
import { ForgotPasswordComponent } from '../forgotPassword/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RemindersComponent } from '../reminders/reminders.component';
import { SearchComponent } from '../search/search.component';
import { SetPasswordComponent } from '../setPassword/set-password.component';
import { TitleComponent } from '../title/title.component';
import { TrashComponent } from '../trash/trash.component';
import { ViewNoteComponent } from '../viewNote/ViewNote.component';

describe('NotesOfCertainLabelComponent', () => {
  let component: NotesOfCertainLabelComponent;
  let fixture: ComponentFixture<NotesOfCertainLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesOfCertainLabelComponent,
        RegisterComponent,
        ViewNoteComponent,
        AppComponent,
        AddNoteComponent,
        EditLabelsComponent,
        SearchComponent,
        TrashComponent,
        ArchiveComponent,
        RemindersComponent,
        DashboardComponent,
        SetPasswordComponent,
        ForgotPasswordComponent,
        LoginComponent,
        TitleComponent, ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [RouterTestingModule,
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
        MatDialogModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesOfCertainLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
