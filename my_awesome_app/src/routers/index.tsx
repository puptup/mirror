import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import NotFountPage from 'pages/NotFoundPage';
import AboutUsPage from 'pages/AboutUsPage';
import TemplatePage from 'pages/TemplatePage';

export const routers = [
  {
    path: '/',
    element: <TemplatePage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutUsPage />,
      },
      {
        path: '*',
        element: <Navigate to={'/404'} />,
      },
      {
        path: '404',
        element: <NotFountPage />,
      },
    ],
  },
];

const browserRouter = createBrowserRouter(routers);

export default browserRouter;
