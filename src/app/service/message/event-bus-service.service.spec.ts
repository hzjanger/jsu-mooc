import { TestBed, inject } from '@angular/core/testing';

import { EventBusServiceService } from './event-bus-service.service';

describe('EventBusServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBusServiceService]
    });
  });

  it('should be created', inject([EventBusServiceService], (service: EventBusServiceService) => {
    expect(service).toBeTruthy();
  }));
});
