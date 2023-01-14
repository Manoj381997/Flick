import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebritiesComponent } from './celebrities.component';

describe('CelebritiesComponent', () => {
  let component: CelebritiesComponent;
  let fixture: ComponentFixture<CelebritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
