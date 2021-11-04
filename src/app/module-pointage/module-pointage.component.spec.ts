import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePointageComponent } from './module-pointage.component';

describe('ModulePointageComponent', () => {
  let component: ModulePointageComponent;
  let fixture: ComponentFixture<ModulePointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulePointageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
