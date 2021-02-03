import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BreakPointRegistry, FlexLayoutModule, FlexStyleBuilder, LayoutAlignStyleBuilder, LayoutGapStyleBuilder, LayoutStyleBuilder, MediaMarshaller, PrintHook, StylesheetMap, StyleUtils, ɵMatchMedia } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule,MatTooltipModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatCardModule, MatSidenavModule, MatListModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TitleComponent } from './components/title/title.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewNoteComponent } from './components/ViewNote/ViewNote.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { NotesOfCertainLabelComponent } from './components/notesOfCertainLabel/notesOfCertainLabel.component';
import { SearchComponent } from './components/search/search.component';
import { EditLabelsComponent } from './components/editLabels/editLabels.component';
import { AddNoteComponent } from './components/addNote/addNote.component';


@NgModule({
  declarations: [
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
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatDialogModule 
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
  bootstrap: [AppComponent]
})
export class AppModule { }
