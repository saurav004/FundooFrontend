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
    private router: Router,
    private snackBar: MatSnackBar) {
    this.urlForColorChange = environment.urlForChangingColor;
  }

  private messageSource = new BehaviorSubject<Note[]>(this.allNotes);
  noteMessage = this.messageSource.asObservable();

  changeNoteMessage(message: Note[]) {
    this.messageSource.next(message);
  }

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

  changeView(message: boolean) {
    this.gridOrListSource.next(message);
  }

  updateNoteDetails(updateObject) {
    this.httpService.postRequestWithToken("notes/updateNotes", updateObject).subscribe(
      result => {
        this.snackBar.open('Edited Successfully ', 'close')._dismissAfter(3000);
        this.get_all_note();
      },
      err => {
        if (err.status === 400) {
          this.snackBar.open('Invalid request.', 'close')._dismissAfter(3000);
        } else if (err.status === 401) {
          localStorage.clear();
          this.router.navigate(['/login']);
          this.snackBar.open('Your access token is expired.', 'close')._dismissAfter(2000);
        }
      }
    );
  }

}
