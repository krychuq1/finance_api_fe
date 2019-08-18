import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalDialogComponent } from './metal-dialog.component';

describe('MetalDialogComponent', () => {
  let component: MetalDialogComponent;
  let fixture: ComponentFixture<MetalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
