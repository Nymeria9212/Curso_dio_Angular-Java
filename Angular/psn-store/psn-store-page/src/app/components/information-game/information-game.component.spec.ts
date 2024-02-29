import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationGameComponent } from './information-game.component';

describe('InformationGameComponent', () => {
  let component: InformationGameComponent;
  let fixture: ComponentFixture<InformationGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationGameComponent]
    });
    fixture = TestBed.createComponent(InformationGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
