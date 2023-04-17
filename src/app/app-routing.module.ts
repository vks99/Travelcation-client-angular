import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import {PaymentComponent} from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HistoryComponent } from './history/history.component';
import { BlogformComponent } from './blogform/blogform.component';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { BlogsComponent } from './blogs/blogs.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'contactus', component: ContactusComponent, canActivate: [AuthGuard] },
  { path: 'Payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'Blogs', component: BlogsComponent, canActivate: [AuthGuard] },
  { path: 'BlogForm', component: BlogformComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'destination', component: DestinationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
