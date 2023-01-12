import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewTransacttionsComponent } from './last-few-transacttions.component';

describe('LastFewTransacttionsComponent', () => {
  let component: LastFewTransacttionsComponent;
  let fixture: ComponentFixture<LastFewTransacttionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastFewTransacttionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastFewTransacttionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
