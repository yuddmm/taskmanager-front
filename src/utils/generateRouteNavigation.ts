export const generateRouteNavigation = (navTitle: string) => {
  switch (navTitle) {
    case 'projects':
      return '/projects';
    default:
      return '/';
  }
};
