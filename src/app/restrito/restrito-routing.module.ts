import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '/Users/Willi/Downloads/WL-games/src/app/inicio/inicio.component';
import { LoginComponent } from '/Users/Willi/Downloads/WL-games/src/app/login/login.component';
import { RestritoComponent } from '/Users/Willi/Downloads/WL-games/src/app/restrito/restrito.component';
const routes: Routes = [
{path: 'inicio', component: InicioComponent},
{path: 'login', component: LoginComponent},
{path: 'restrito',component: RestritoComponent},
{path: '', redirectTo: '/inicio', pathMatch:'full'}
]
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
