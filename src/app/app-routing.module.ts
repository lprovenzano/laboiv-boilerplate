import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BienvenidoComponent} from './artifact/bienvenido/bienvenido.component';
import {LoginComponent} from './artifact/login/login.component';
import {ErrorComponent} from './artifact/error/error.component';
import {UserComponent} from './entity/user/user.component';

const routes: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
