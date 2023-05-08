import { Component } from '@angular/core';
import { faFacebookSquare, faTwitterSquare, faGoogle, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  faGoogle = faGoogle;
  faGithubSquare = faGithubSquare;
}
