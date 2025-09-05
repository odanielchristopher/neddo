import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router';
import socketIo from 'socket.io-client';
import { toast } from 'sonner';

import { env } from '@app/config/env';
import { localStorageKeys } from '@app/config/localStorageKeys';
import { routes } from '@app/Router/routes';
import type { Invitation } from '@app/types';
import { InvitationToast } from '@views/components/app/InvitationToast';

import { useAuth } from '../hooks/useAuth';

interface IAuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: IAuthGuardProps) {
  const { signedIn, user } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (!user || !token) return;

    const socket = socketIo(env.VITE_API_URL, {
      transports: ['websocket'],
      auth: {
        token: `Bearer ${token}`,
      },
    });

    socket.on('connect', () => {
      socket.emit('joinUser', user.id);
    });

    socket.on('invitation', (invitation: Invitation) => {
      toast.custom((toastId) => (
        <InvitationToast invitation={invitation} toastId={toastId} />
      ));
    });

    return () => {
      if (user && token) {
        socket.disconnect();
      }
    };
  }, [user]);

  if (!signedIn && isPrivate) {
    return <Navigate to={routes.login} replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to={routes.dashboard} replace />;
  }

  return <Outlet />;
}
