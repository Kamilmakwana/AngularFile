import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './BlogsComponents/feedback/feedback.component';
import { LoginComponent } from './BlogsComponents/login/login.component';
import { HomeComponent } from './BlogsComponents/home/home.component';

const routes: Routes = [
  {path:'feedback', component:FeedbackComponent},
  {path:'login', component:LoginComponent},
  {path:'Home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
