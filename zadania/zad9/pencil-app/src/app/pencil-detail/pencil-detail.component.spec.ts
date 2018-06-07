import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilDetailComponent } from './pencil-detail.component';


describe('PencilDetailComponent', () => {
  let component: PencilDetailComponent;
  let fixture: ComponentFixture<PencilDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencilDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
