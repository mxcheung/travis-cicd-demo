import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, tvmazemxcheungService } from 'tvmazemxcheung';
import { HeaderDetails, HeadermxcheungComponent } from 'headermxcheung';
import { FooterDetails, FootermxcheungComponent } from 'footermxcheung';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show$: Observable<Show>;
  showId = 366;
  footerDetails: FooterDetails;
  headerDetails: HeaderDetails;

  constructor(private tvmazemxcheung: tvmazemxcheungService) {
    this.show$ = this.tvmazemxcheung.getShow(this.showId);
    this.headerDetails = {caption : 'Angular 7 CICD Example v3.'};
    this.headerDetails.menuItems = [
      { name: 'Teachers', href: 'Teachers' },
      { name: 'Home', href: 'Home' },
      { name: 'Menu1', href: 'Menu1' }
    ];
    this.footerDetails = {caption : 'Made with love by ACME v5 Pty Ltd.'};

  }
}
