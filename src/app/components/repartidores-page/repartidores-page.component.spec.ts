import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidoresPageComponent } from './repartidores-page.component';

describe('RepartidoresPageComponent', () => {
  let component: RepartidoresPageComponent;
  let fixture: ComponentFixture<RepartidoresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartidoresPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartidoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
