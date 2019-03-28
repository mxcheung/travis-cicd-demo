import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { tvmazemxcheungModule } from 'tvmazemxcheung';
import { FootermxcheungModule } from 'footermxcheung';
import { HomemxcheungModule } from 'homemxcheung';
import { StudentmxcheungModule } from 'studentmxcheung';
import { TeachermxcheungModule } from 'teachermxcheung';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [AppRoutingModule,
                tvmazemxcheungModule,
                HomemxcheungModule,
                StudentmxcheungModule,
                TeachermxcheungModule,
                FootermxcheungModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
