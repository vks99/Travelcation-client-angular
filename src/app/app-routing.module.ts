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
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'contactus', component: ContactusComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'BlogForm', component: BlogformComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'destination', component: DestinationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
