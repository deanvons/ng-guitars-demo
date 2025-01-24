
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('username') !== null) {
    return true;
  } else {
    alert('You need to login first')
    router.navigateByUrl('/'); // Perform navigation
    return false; // Block the original navigation
  }
};
