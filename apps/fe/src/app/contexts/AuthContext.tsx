import type { IUser } from '@app/entities/User';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { createContext, useCallback, useEffect, useState } from 'react';

import { USER_QUERY_KEY } from '@app/config/constants';
import { localStorageKeys } from '@app/config/localStorageKeys';
import { usersService } from '@app/services/usersService';
import { LaunchScreen } from '@views/components/app/LaunchScreen';

interface IAuthContextValue {
  signedIn: boolean;
  user: IUser | undefined;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storagedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storagedAccessToken;
  });
  const queryClient = useQueryClient();

  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: USER_QUERY_KEY(),
    queryFn: usersService.me,
    staleTime: Infinity,
    enabled: signedIn,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    queryClient.removeQueries();

    setSignedIn(false);
  }, [queryClient]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success(`Bem-vindo, ${capitalizeFirstLetter(data.name)}!`);
  //   }
  // }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      // toast.error('Sua sessão expirou!');
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess,
        user: data,
        signin,
        signout,
      }}
    >
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
