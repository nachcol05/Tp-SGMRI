canActivate(route: ActivatedRouteSnapshot): boolean {
  const expectedRole = route.data['expectedRole'];
  const currentRole = this.authService.getRol();

  if (currentRole !== expectedRole) {
    this.router.navigate(['/login']);
    return false;
  }
  return true;
}