import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  login: any;
  submit(login:'1') {
    debugger
    console.log('Form submitted',this.login);
  }
}
