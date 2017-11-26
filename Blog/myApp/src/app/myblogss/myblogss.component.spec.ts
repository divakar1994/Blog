import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyblogssComponent } from './myblogss.component';

describe('MyblogssComponent', () => {
  let component: MyblogssComponent;
  let fixture: ComponentFixture<MyblogssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyblogssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyblogssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
