import { Component, NgModule } from '@angular/core';
import { FormComponentComponent } from './MyComponents/form-component/form-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app-angular';
  constructor(){
    setTimeout(() => {
      this.title = "Changed title"
    }, 2000);
  }
}
