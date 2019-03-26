import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, tvmazemxcheungService } from 'tvmazemxcheung';
import { HeadermxcheungComponent } from 'headermxcheung';
import { FooterDetails, FootermxcheungComponent } from 'footermxcheung';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show$: Observable<Show>;
  showId = 360;
  footerDetails: FooterDetails;

  constructor(private tvmazemxcheung: tvmazemxcheungService) {
    this.show$ = this.tvmazemxcheung.getShow(this.showId);
    this.footerDetails = {caption : 'Made with love by ACME v3 Pty Ltd.'};

  }
}
