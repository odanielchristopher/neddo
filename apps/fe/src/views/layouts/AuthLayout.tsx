import { Outlet } from 'react-router';

import { Logo } from '@views/components/ui/Logo';

export function AuthLayout() {
  return (
    <div className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-16">
        <Logo
          classNames={{
            icon: 'size-8',
            title: 'text-2xl',
          }}
        />

        <div className="w-full max-w-[504px] px-6">
          <Outlet />
        </div>
      </div>
      {/* <div className="w-1/2 h-full justify-center items-center p-8 relative hidden lg:flex">
        <img
          src={illustration}
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
        />

        <div className="max-w-[656px] bottom-8 mx-8 bg-white p-10 absolute rounded-b-[32px]">
          <Logo className="text-teal-900 h-8" />

          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div> */}
    </div>
  );
}
