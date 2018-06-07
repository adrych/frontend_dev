import { TestBed, inject } from '@angular/core/testing';

import { PencilService } from './pencil.service';

describe('PencilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PencilService]
    });
  });

  it('should be created', inject([PencilService], (service: PencilService) => {
    expect(service).toBeTruthy();
  }));
});
