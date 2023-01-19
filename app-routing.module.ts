import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import { FirstpgComponent } from './firstpg/firstpg.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RanksdashboardComponent } from './ranksdashboard/ranksdashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'ranksdashboard',pathMatch:'full'},
  {path:'ranksdashboard',component:RanksdashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'mainpage',component:MainpageComponent},
  // {path:'firstpg',component:FirstpgComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
