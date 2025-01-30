
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => { // guards were previously created with classes
const router = inject(Router); // Dependency Injection for functions 👌

  if (localStorage.getItem('username') !== null) {
    return true;
  } else {
    alert('You need to login first')
    router.navigateByUrl('/'); // Perform navigation
    return false; // Block the original navigation
  }
};
