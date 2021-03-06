import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BreakPointRegistry, FlexLayoutModule, FlexStyleBuilder, LayoutAlignStyleBuilder, LayoutGapStyleBuilder, LayoutStyleBuilder, MediaMarshaller, PrintHook, StylesheetMap, StyleUtils, ɵMatchMedia } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {
  MatInputModule,
  MatTooltipModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TitleComponent } from './components/title/title.component';
import { ForgotPasswordComponent } from './components/forgotPassword/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewNoteComponent } from './components/viewNote/ViewNote.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { NotesOfCertainLabelComponent } from './components/notesOfCertainLabel/notesOfCertainLabel.component';
import { SearchComponent } from './components/search/search.component';
import { EditLabelsComponent } from './components/editLabels/editLabels.component';
import { AddNoteComponent } from './components/addNote/addNote.component';
import { SetPasswordComponent } from './components/setPassword/set-password.component';
import { NoteToolBarComponent } from './components/noteToolBar/noteToolBar.component';
import { EditNoteComponent } from './components/editNote/editNote.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';





@NgModule({
  declarations: [
    EditNoteComponent,
    NoteToolBarComponent,
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
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TitleComponent,
  ],
  imports: [
    NgxMatNativeDateModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule
  ],
  providers: [
    PrintHook,
    StyleUtils,
    StyleSheet,
    StylesheetMap,
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,
    LayoutGapStyleBuilder
  ],
  entryComponents: [
    EditNoteComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
