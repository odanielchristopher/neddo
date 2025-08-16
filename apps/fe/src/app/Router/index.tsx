import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { LaunchScreen } from '@views/components/app/LaunchScreen';
import { AppLayout } from '@views/layouts/AppLayout';
import { Dashboard } from '@views/pages/Dashboard';

export function Router() {
  return (
    <Suspense fallback={<LaunchScreen />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
