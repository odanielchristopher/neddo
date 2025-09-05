import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

import { useAuth } from '@app/hooks/useAuth';
import { authService } from '@app/services/authService';

import { organizationSchema } from './steps/OrganizationInfo/schema';
import { passwordSchema } from './steps/Password/schema';
import { personalSchema } from './steps/PersonalInfo/schema';

const registerSchema = z.object({
  personalInfo: personalSchema,
  passwordInfo: passwordSchema,
  organizationInfo: organizationSchema,
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export function useRegisterController() {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const { signin } = useAuth();

  const { mutateAsync: register, isPending: isLoading } = useMutation({
    mutationFn: authService.signup,
  });

  const handleSubmit = form.handleSubmit(
    async ({ personalInfo, passwordInfo, organizationInfo }) => {
      try {
        const user = {
          avatar: personalInfo.avatar,
          name: personalInfo.name,
          email: personalInfo.email,
          password: passwordInfo.password,
        };
        const organization = organizationInfo;

        const { accessToken, refreshToken } = await register({
          user,
          organization,
        });

        signin(accessToken, refreshToken);
      } catch {
        toast.error('Ocorreu um erro no seu cadastro!');
      }
    },
  );

  return {
    form,
    handleSubmit,
    isLoading,
  };
}
