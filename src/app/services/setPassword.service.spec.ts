/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SetPasswordService } from './setPassword.service';

describe('Service: SetPassword', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetPasswordService]
    });
  });

  it('should ...', inject([SetPasswordService], (service: SetPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
