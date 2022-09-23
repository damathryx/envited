import React from 'react'

import {
    createBrowserRouter,
  } from "react-router-dom";
import Event from './Event';
import EventCreate from './EventCreate';
import Landing from "./Landing";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: '/create',
      element: <EventCreate />
    },
    {
      path: '/event',
      element: <Event />
    }
  ]);