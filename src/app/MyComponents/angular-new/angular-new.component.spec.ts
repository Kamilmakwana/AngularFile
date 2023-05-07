import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNewComponent } from './angular-new.component';

describe('AngularNewComponent', () => {
  let component: AngularNewComponent;
  let fixture: ComponentFixture<AngularNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
