import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePublicElectionComponent } from './create-public-election.component';

describe('CreatePublicElectionComponent', () => {
  let component: CreatePublicElectionComponent;
  let fixture: ComponentFixture<CreatePublicElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePublicElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePublicElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
