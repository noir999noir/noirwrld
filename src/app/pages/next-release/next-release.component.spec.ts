import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextReleaseComponent } from './next-release.component';

describe('NextReleaseComponent', () => {
  let component: NextReleaseComponent;
  let fixture: ComponentFixture<NextReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextReleaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
