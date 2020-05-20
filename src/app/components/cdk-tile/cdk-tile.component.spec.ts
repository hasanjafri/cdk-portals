import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkTileComponent } from './cdk-tile.component';

describe('CdkTileComponent', () => {
  let component: CdkTileComponent;
  let fixture: ComponentFixture<CdkTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
