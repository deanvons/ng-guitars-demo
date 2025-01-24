import { Routes } from '@angular/router';
import { GuitarsPageComponent } from './pages/guitars-page/guitars-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:'',component:LoginPageComponent},
    {path:'guitars',component:GuitarsPageComponent,canActivate:[authGuard]}
];
