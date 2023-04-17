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
  { path: 'contactus', component: ContactusComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'BlogForm', component: BlogformComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'destination', component: DestinationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
