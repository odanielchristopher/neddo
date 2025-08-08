import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { lazyLoad } from '@app/utils/lazyLoad';
import { LaunchScreen } from '@views/components/app/LaunchScreen';

const { Dashboard } = lazyLoad(() => import('@views/pages/Dashboard'));

export function Router() {
  return (
    <Suspense fallback={<LaunchScreen />}>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
