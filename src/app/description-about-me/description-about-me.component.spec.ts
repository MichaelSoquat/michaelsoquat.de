import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAboutMeComponent } from './description-about-me.component';

describe('DescriptionAboutMeComponent', () => {
  let component: DescriptionAboutMeComponent;
  let fixture: ComponentFixture<DescriptionAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
