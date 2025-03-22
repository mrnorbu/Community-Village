import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

export const idCheckGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree => {
  const router = inject(Router); // Inject Router instance
  const id = route.paramMap.get('type') || route.queryParamMap.get('type'); // Get ID from path or query params
  const searchPath = route.url[0]?.path || 'search'; // Get first segment as search path

  // Redirect to search if ID is missing or invalid
  if (!id || isNaN(Number(id))) {
    console.warn(`Invalid or missing ID. Redirecting to /search/${searchPath}`);
    return router.createUrlTree([`/search/${searchPath}`]);
  }

  // Allow access if ID is valid
  return true;
};
