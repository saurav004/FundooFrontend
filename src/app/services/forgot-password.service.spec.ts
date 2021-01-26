/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForgotPasswordService } from './forgot-password.service';

describe('Service: ForgotPassword', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotPasswordService]
    });
  });

  it('should ...', inject([ForgotPasswordService], (service: ForgotPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
