import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import Index from './routes/index'
import Login, {action as loginAction} from "./routes/login"
import EmailSent from './routes/emailSent'
import CreateBusiness, { action as businessAction } from './routes/create-business'
import SingleBusiness, { loader as businessLoader } from './routes/single-business'
import GetQRCode, { loader as qrLoader } from './routes/get-qrcode'
import OwnerList, { loader as listLoader } from './routes/owner-list'
import EditBusiness, { loader as editLoader, action as editAction } from './routes/edit-business'
import Admin from './routes/admin/admin'
import Users, { loader as adminUsersLoader, action as adminUsersAction } from './routes/admin/users'
import UserFilter, { action as filterAction, loader as filterLoader } from './routes/admin/user-filter'
import BusinessList, { loader as businessListLoader } from './routes/admin/business-list'
import BusinessFilter from './routes/admin/business-filter'
import Stats, {loader as statsLoader} from './routes/admin/stats'
import {action as deleteAction} from './routes/delete-business'
import ErrorPage from './error-page'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: '/create/business',
            element: <CreateBusiness />,
            action: businessAction,
          },
          {
            path: '/business/:name',
            element: <SingleBusiness />,
            loader: businessLoader,
          },
          {
            path: '/qrcode/:name',
            element: <GetQRCode />,
            loader: qrLoader,
          },

          {
            path: '/login',
            element: <Login />,
            action: loginAction,
            errorElement: <ErrorPage />,
          },
          {
            path: '/verify-email',
            element: <EmailSent />,
          },
          {
            path: '/list/:email',
            element: <OwnerList />,
            loader: listLoader,
          },
          {
            path: '/edit/:name',
            element: <EditBusiness />,
            loader: editLoader,
            action: editAction,
          },
          {
            path: '/delete/:id',
            action: deleteAction,
          },
          {
            path: '/admin',
            element: <Admin />,
            children: [
              {
                index: true,
                element: <Stats />,
                loader: statsLoader,
              },
              {
                path: '/admin/users',
                element: <Users />,
                loader: adminUsersLoader,
                action: adminUsersAction,
              },
              {
                path: '/admin/users/filter',
                element: <UserFilter />,
                action: filterAction,
                loader: filterLoader,
              },
              {
                path: '/admin/businessList',
                element: <BusinessList />,
                loader: businessListLoader,
              },
              {
                path: '/admin/business/filter',
                element: <BusinessFilter/>
              },
            ],
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
