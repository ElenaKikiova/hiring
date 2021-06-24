import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireDevelopersComponent } from './hire-developers.component';

describe('HireDevelopersComponent', () => {
  let component: HireDevelopersComponent;
  let fixture: ComponentFixture<HireDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
