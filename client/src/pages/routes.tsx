import React from 'react';
import PageRoutes from '../types/PageRoutes';
import Issue from './Issue/';
import Home from './Home/';
const getPageRoutes: () => PageRoutes[] = () => [
  {
    path: '/home',
    component: () => <Home />
  },
  {
    path: '/issue',
    component: () => <Issue />
  },
];

export default getPageRoutes;
export { getPageRoutes };
