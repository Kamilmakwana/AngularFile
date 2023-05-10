import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularNewComponent } from './MyComponents/angular-new/angular-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularItemComponent } from './MyComponents/angular-item/angular-item.component';
import { EmpInfoComponent } from './MyComponents/emp-info/emp-info.component';
import { FormComponentComponent } from './MyComponents/form-component/form-component.component';
import { NavbarComponent } from './BlogsComponents/navbar/navbar.component';
import { IntroComponent } from './BlogsComponents/intro/intro.component';
import { MydetailsComponent } from './BlogsComponents/mydetails/mydetails.component';
import { FooterComponent } from './BlogsComponents/footer/footer.component';
import { FeedbackComponent } from './BlogsComponents/feedback/feedback.component';
import { LoginComponent } from './BlogsComponents/login/login.component';
import { HomeComponent } from './BlogsComponents/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './BlogsComponents/about/about.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AngularNewComponent,
    AngularItemComponent,
    EmpInfoComponent,
    FormComponentComponent,
    NavbarComponent,
    IntroComponent,
    MydetailsComponent,
    FooterComponent,
    FeedbackComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
