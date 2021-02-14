import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotesService } from './notes.service';

describe('Service: Notes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  it('should ...', inject([NotesService], (service: NotesService) => {
    expect(service).toBeTruthy();
  }));
});
