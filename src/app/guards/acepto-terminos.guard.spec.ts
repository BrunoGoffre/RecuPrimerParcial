import { TestBed } from '@angular/core/testing';

import { AceptoTerminosGuard } from './acepto-terminos.guard';

describe('AceptoTerminosGuard', () => {
  let guard: AceptoTerminosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AceptoTerminosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
