import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataService } from './data.service';

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [HttpClientTestingModule, HttpClientModule]
    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
