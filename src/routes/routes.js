import React from 'react';

import LandingPage from '../components/LandingPage';
import CreatePage from '../components/Create';
import DetailPage from '../components/Detail';

const routes = [
  {
    path: '/',
    Component: <LandingPage />,
    exact: true,
  },
  {
    path: '/create',
    Component: <CreatePage />,
    exact: true,
  },
  {
    path: '/detail',
    Component: <DetailPage />,
    exact: true,
  },
]

export default routes;