import { Routes } from '@angular/router';
import { GuitarsPageComponent } from './pages/guitars-page/guitars-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './auth.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { GuitarDetailsPageComponent } from './pages/guitar-details-page/guitar-details-page.component';

export const routes: Routes = [
    {path:'',component:LoginPageComponent},
    {path:'guitars',component:GuitarsPageComponent},
    {path:'profile',component:ProfilePageComponent},
    {path:'guitars/:id',component:GuitarDetailsPageComponent}
];
