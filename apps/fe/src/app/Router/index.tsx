import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { lazyLoad } from '@app/utils/lazyLoad';
import { LaunchScreen } from '@views/components/app/LaunchScreen';

import { AuthGuard } from './AuthGuard';
import { params } from './params';
import { routes } from './routes';

const { AuthLayout } = lazyLoad(() => import('@views/layouts/AuthLayout'));
const { AppLayout } = lazyLoad(() => import('@views/layouts/AppLayout'));
const { OrgNavigationLayout } = lazyLoad(
  () => import('@views/layouts/OrgNavigationLayout'),
);

const { BoardPage } = lazyLoad(() => import('@views/pages/BoardPage'));
const { Boards } = lazyLoad(() => import('@views/pages/Boards'));
const { Dashboard } = lazyLoad(() => import('@views/pages/Dashboard'));
const { Login } = lazyLoad(() => import('@views/pages/Login'));

export function Router() {
  return (
    <Suspense fallback={<LaunchScreen />}>
      <Routes>
        <Route index element={<Navigate to={routes.login} />} />
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<AppLayout />}>
            <Route path={routes.dashboard} element={<Dashboard />} />

            <Route
              path={`:${params.organizationName}${routes.boards}/:${params.boardId}`}
              element={<BoardPage />}
            />

            <Route element={<OrgNavigationLayout />}>
              <Route
                path={`:${params.organizationName}${routes.boards}`}
                element={<Boards />}
              />
              <Route
                path={`:${params.organizationName}${routes.members}`}
                element={<div>Tabela de membros</div>}
              />
              <Route
                path={`:${params.organizationName}${routes.invites}`}
                element={
                  <div>Pagina de registro para acompanhar os convites</div>
                }
              />
            </Route>
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path={routes.login} element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
