import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './components/addNote/addNote.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditLabelsComponent } from './components/editLabels/editLabels.component';
import { ForgotPasswordComponent } from './components/forgotPassword/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotesOfCertainLabelComponent } from './components/notesOfCertainLabel/notesOfCertainLabel.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { SearchComponent } from './components/search/search.component';
import { SetPasswordComponent } from './components/setPassword/set-password.component';
import { TitleComponent } from './components/title/title.component';
import { TrashComponent } from './components/trash/trash.component';
import { ViewNoteComponent } from './components/viewNote/ViewNote.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RegisterComponent,
        AddNoteComponent,
        EditLabelsComponent,
        NotesOfCertainLabelComponent,
        SearchComponent,
        TrashComponent,
        ArchiveComponent,
        RemindersComponent,
        ViewNoteComponent,
        DashboardComponent,
        SetPasswordComponent,
        ForgotPasswordComponent,
        LoginComponent,
        TitleComponent,

      ],
      imports: [RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatListModule,
        MatSidenavModule,
        MatMenuModule,
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
        MatDialogModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FundooUI'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FundooUI');
  });
});
