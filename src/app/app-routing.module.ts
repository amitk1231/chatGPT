import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { SigninComponent } from './signin/signin.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'tdf', component: TdfComponent},
  { path: 'reactive-form', component: ReactiveFormComponent},
  { path: 'view-child', component: ViewChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
