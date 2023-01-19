import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanksdashboardComponent } from './ranksdashboard.component';

describe('RanksdashboardComponent', () => {
  let component: RanksdashboardComponent;
  let fixture: ComponentFixture<RanksdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanksdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanksdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
