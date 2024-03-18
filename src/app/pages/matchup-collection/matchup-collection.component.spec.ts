import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupCollectionComponent } from './matchup-collection.component';

describe('MatchupCollectionComponent', () => {
  let component: MatchupCollectionComponent;
  let fixture: ComponentFixture<MatchupCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchupCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchupCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
