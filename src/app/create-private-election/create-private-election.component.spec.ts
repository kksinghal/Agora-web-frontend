import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrivateElectionComponent } from './create-private-election.component';

describe('CreatePrivateElectionComponent', () => {
  let component: CreatePrivateElectionComponent;
  let fixture: ComponentFixture<CreatePrivateElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrivateElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrivateElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
