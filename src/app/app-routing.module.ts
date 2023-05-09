import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './BlogsComponents/feedback/feedback.component';
import { LoginComponent } from './BlogsComponents/login/login.component';
import { HomeComponent } from './BlogsComponents/home/home.component';
import { AboutComponent } from './BlogsComponents/about/about.component';

const routes: Routes = [
  {path:'feedback', component:FeedbackComponent},
  {path:'login', component:LoginComponent},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
