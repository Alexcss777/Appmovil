import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatatimesPage } from './datatimes.page';

describe('DatatimesPage', () => {
  let component: DatatimesPage;
  let fixture: ComponentFixture<DatatimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatimesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatatimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
