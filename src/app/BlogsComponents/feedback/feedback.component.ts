import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  faStar=faStar;
  starRating = 0; 

  OnClick() {
    const form = document.getElementById('formid') as HTMLFormElement;
    if (form.checkValidity()) {
      alert('Thanks for your valuable feedback!');
      form.submit();
    }
    else
      {
        alert('Please Fill All Required Details')
      }
  }
  
}
