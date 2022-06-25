import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcaComponent } from './modifca.component';

describe('ModifcaComponent', () => {
  let component: ModifcaComponent;
  let fixture: ComponentFixture<ModifcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
