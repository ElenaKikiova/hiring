import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireDeveloperComponent } from './hire-developer.component';

describe('HireDeveloperComponent', () => {
  let component: HireDeveloperComponent;
  let fixture: ComponentFixture<HireDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
