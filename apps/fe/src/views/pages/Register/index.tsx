import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router';
import z from 'zod';

import { routes } from '@app/Router/routes';
import { Stepper } from '@views/components/app/Stepper';

import { OrganizationInfo } from './steps/OrganizationInfo';
import { organizationSchema } from './steps/OrganizationInfo/schema';
import { Password } from './steps/Password';
import { passwordSchema } from './steps/Password/schema';
import { PersonalInfo } from './steps/PersonalInfo';
import { personalSchema } from './steps/PersonalInfo/schema';

const registerSchema = z.object({
  personalInfo: personalSchema,
  passwordInfo: passwordSchema,
  organizationInfo: organizationSchema,
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export function Register() {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleSubmit = form.handleSubmit(async (formData) =>
    console.log(formData),
  );

  return (
    <div>
      <header className="mb-10 flex flex-col items-center gap-4">
        <h1 className="dark:text-foreground text-2xl font-semibold tracking-[-1px] text-gray-800">
          Faça o seu cadastro
        </h1>
      </header>

      <FormProvider {...form}>
        <form onSubmit={handleSubmit} className="min-h-[500px]">
          <Stepper
            initialStep={0}
            hasHeader
            steps={[
              {
                label: 'Informações pessoais',
                content: <PersonalInfo />,
              },
              {
                label: 'Senha',
                content: <Password />,
              },
              {
                label: 'Organização',
                content: <OrganizationInfo />,
              },
            ]}
          />
        </form>
      </FormProvider>

      <footer className="mt-10 flex flex-col items-center gap-4">
        <p className="space-x-2">
          <span className="dark:text-muted-foreground tracking-[-0.5px] text-gray-700">
            Já possui uma conta?
          </span>
          <Link
            to={`/${routes.login}`}
            className="text-primary font-medium tracking-[-0.5px]"
          >
            Fazer login.
          </Link>
        </p>
      </footer>
    </div>
  );
}
