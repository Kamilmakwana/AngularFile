import { Component } from '@angular/core';
import { faInstagram, faTwitterSquare, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faInstagram = faInstagram;
  faTwitterSquare = faTwitterSquare;
  faLinkedin = faLinkedin;
  faDiscord = faDiscord;
}
