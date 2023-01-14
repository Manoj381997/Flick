import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityDetailsComponent } from './celebrity-details.component';

describe('CelebrityDetailsComponent', () => {
  let component: CelebrityDetailsComponent;
  let fixture: ComponentFixture<CelebrityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
