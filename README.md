# index.tsx
<!-- <BrowserRouter>
  <App />
  <Toast />
  <ReactQueryDevtools position="bottom-right" />
</BrowserRouter> -->

# router.tsx
import { ComponentType, lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import BaseLayout from '@/layouts/BaseLayout';
import SidebarLayout from '@/layouts/SidebarLayout';

import SuspenseLoader from '@/components/SuspenseLoader';

const Loader =
  <T extends {}>(Component: ComponentType<T>) =>
    (props: T) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );

const Status404 = Loader(lazy(() => import('@/...')));

const routes = (isLogged: boolean) => [
  {
    path: '/',
    element: !isLogged ? <BaseLayout /> : <Navigate to="/setting" />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Status404 />,
      },
    ],
  },
  {
    path: '/',
    element: isLogged ? <SidebarLayout /> : <Navigate to="/login" />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
];

export default routes;

# App.tsx
const content = useRoutes(router(Boolean(isLogged)));

<ModalProvider>
    {content}
</ModalProvider>


# BaseLayout
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout: FC = ({ children }) => {
  return (
    <div>
      {children || <Outlet />}
    </div>
  );
};

export default BaseLayout;

# SidebarLayout
import { FC, ReactNode } from 'react';

import SuspenseLoader from '@/components/SuspenseLoader';
import { RouteGuard } from '@/router/RouteGuard';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  return (
    <>
      <Box>
        <Header />
        <Sidebar />
        <Box>
          <Box>
            <RouteGuard />
          </Box>
        </Box>
      </Box>
      {isFetching || isMutating ? <SuspenseLoader /> : null}
    </>
  );
};

export default SidebarLayout;

# RouteGuard
import Status403 from '@/pages/Status/Status403';
import { Outlet, useLocation } from 'react-router';

export const RouteGuard = () => {
  const { pathname } = useLocation();

  if (!allowedPath.length) return <Outlet />;

  return <>{allowedPath.includes(pathname) ? <Outlet /> : <Status403 />}</>;
};
