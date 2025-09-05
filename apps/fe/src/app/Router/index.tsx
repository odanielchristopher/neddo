import { AnimatePresence } from 'motion/react';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { AuthGuard } from '@app/guards/AuthGuard';
import { OrganizationGuard } from '@app/guards/OrganizationGuard';
import { lazyLoad } from '@app/utils/lazyLoad';
import { LaunchScreen } from '@views/components/app/LaunchScreen';

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
const { Register } = lazyLoad(() => import('@views/pages/Register'));

export function Router() {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LaunchScreen />}>
        <Routes>
          <Route index element={<Navigate to={routes.login} />} />
          <Route element={<AuthGuard isPrivate />}>
            <Route element={<AppLayout />}>
              <Route path={routes.dashboard} element={<Dashboard />} />

              <Route element={<OrganizationGuard permission="boards" />}>
                <Route
                  path={`:${params.organizationSlug}/${routes.boards}/:${params.boardId}`}
                  element={<BoardPage />}
                />
              </Route>

              <Route path={`:${params.organizationSlug}`}>
                <Route element={<OrgNavigationLayout />}>
                  <Route element={<OrganizationGuard permission="boards" />}>
                    <Route path={routes.boards} element={<Boards />} />
                  </Route>

                  <Route element={<OrganizationGuard permission="members" />}>
                    <Route
                      path={routes.members}
                      element={<div>Tabela de membros</div>}
                    />
                  </Route>

                  <Route element={<OrganizationGuard permission="invites" />}>
                    <Route
                      path={routes.invitations}
                      element={
                        <div>
                          Pagina de registro para acompanhar os convites
                        </div>
                      }
                    />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>

          <Route element={<AuthGuard isPrivate={false} />}>
            <Route element={<AuthLayout />}>
              <Route path={routes.login} element={<Login />} />
              <Route path={routes.register} element={<Register />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
