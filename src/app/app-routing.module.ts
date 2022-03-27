import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopiedListComponent } from './components/copied-list/copied-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'list', component: CopiedListComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
