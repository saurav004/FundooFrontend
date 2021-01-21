import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreakPointRegistry, FlexLayoutModule, FlexStyleBuilder, LayoutAlignStyleBuilder, LayoutGapStyleBuilder, LayoutStyleBuilder, MediaMarshaller, PrintHook, StylesheetMap, StyleUtils, ɵMatchMedia } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatCardModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
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
  ],
  providers: [
    UserService,
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