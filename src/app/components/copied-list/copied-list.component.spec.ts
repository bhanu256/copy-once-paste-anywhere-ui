import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiedListComponent } from './copied-list.component';

describe('CopiedListComponent', () => {
  let component: CopiedListComponent;
  let fixture: ComponentFixture<CopiedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
