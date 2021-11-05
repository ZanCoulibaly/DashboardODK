import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifApprenantComponent } from './modif-apprenant.component';

describe('ModifApprenantComponent', () => {
  let component: ModifApprenantComponent;
  let fixture: ComponentFixture<ModifApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
