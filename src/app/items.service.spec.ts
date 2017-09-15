import { TestBed, inject } from '@angular/core/testing';

import { ItemsServiceService } from './items-service.service';

describe('ItemsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsServiceService]
    });
  });

  it('should ...', inject([ItemsServiceService], (service: ItemsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
