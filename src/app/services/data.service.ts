import { Note } from 'src/app/models/note';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/http.service';
import { Injectable } from '@angular/core';
import { Label } from '../models/label';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private router: Router;
  public gridListView = false;
  public allNotes: Note[] = [];
  public trashNotes: Note[];
  public ArchiveNotes: Note[];
  public allLabels: Label[];
  public pinNotes: Note[];
  public unPinNotes: Note[];
  public urlForColorChange: any;

  constructor(
    private httpService: HttpService,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar) {
    this.get_all_note();
    this.urlForColorChange = environment.urlForChangingColor;
  }

  private messageSource = new BehaviorSubject<Note[]>(this.allNotes);
  noteMessage = this.messageSource.asObservable();

  // function for next change for all subscriber components
  changeNoteMessage(message: Note[]) {
    this.messageSource.next(message);
  }

  // Function for get all notes
  get_all_note() {
    this.httpService.getRequestWithToken("notes/getNotesList").subscribe(
      response => {
        this.allNotes = response.data.data;
        this.changeNoteMessage(this.allNotes);

      },
      err => {
        if (err.status === 401) {
          localStorage.clear();
          this.router.navigate(['/login']);
        } else if (err.status === 0) {
        }
      }
    );
  }

  private gridOrListSource = new BehaviorSubject<boolean>(this.gridListView);
  gridListMessage = this.gridOrListSource.asObservable();

  // function for next change for all subscriber components
  changeView(message: boolean) {
    this.gridOrListSource.next(message);
  }

  changeColor(data: Note) {
    let result: any;
    this.httpService.postRequestWithToken("notes/changesColorNotes", data).subscribe(response => result = response);
    this.get_all_note();
  }

  pinUnPinNote(data: Note) {
    let result: any;
    this.httpService.postRequestWithToken("notes/pinUnpinNotes", data).subscribe(response => result = response);
    this.get_all_note();
  }

}
