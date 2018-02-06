import { TestBed, inject } from '@angular/core/testing';

import { MesaageService } from './mesaage.service';

describe('MesaageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MesaageService]
    });
  });

  it('should be created', inject([MesaageService], (service: MesaageService) => {
    expect(service).toBeTruthy();
  }));
});
