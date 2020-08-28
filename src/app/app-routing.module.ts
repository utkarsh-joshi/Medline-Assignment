import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { ThankyouTemplateComponent } from './pages/thankyou-template/thankyou-template.component';


const routes: Routes = [

  { path: '', redirectTo: '/user-registration', pathMatch: 'full' },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'thankyou-template',component:ThankyouTemplateComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
