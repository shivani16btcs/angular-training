import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ DummyComponent} from './dummy/dummy.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'home' ,component:DummyComponent},
  {path:'ECoupons',component:DummyComponent},
  {path:'E-Brand',component:DummyComponent},
  {path:'Reuse Market Button',component:DummyComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
