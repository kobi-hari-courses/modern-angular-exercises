import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CounterService } from '../services/counter.service';

export const counterGuard: CanActivateFn = async () => {
  const counterService = inject(CounterService);
  const router = inject(Router);
  const isAllowed = await counterService.isAllowed();

  if (isAllowed) return true;

  return router.createUrlTree(['/home']);

};
