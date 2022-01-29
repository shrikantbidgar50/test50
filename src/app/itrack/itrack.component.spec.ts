import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITrackComponent } from './itrack.component';

describe('ITrackComponent', () => {
  let component: ITrackComponent;
  let fixture: ComponentFixture<ITrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ITrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
