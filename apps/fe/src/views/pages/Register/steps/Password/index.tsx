import { useStepper } from '@app/hooks/useStepper';
import { useFormContext } from 'react-hook-form';

import {
  StepperNextButton,
  StepperPreviousButton,
} from '@views/components/app/Stepper';
import { Input } from '@views/components/ui/Input';

import type { RegisterFormData } from '../..';

export function Password() {
  const { register, formState, ...form } = useFormContext<RegisterFormData>();

  const { nextStep } = useStepper();

  async function handleNextStep() {
    const isValid = await form.trigger('passwordInfo', {
      shouldFocus: true,
    });

    if (isValid) {
      nextStep();
    }
  }

  return (
    <div className="flex flex-col p-4">
      <div className="space-y-3">
        <Input
          placeholder="Senha*"
          {...register('passwordInfo.password')}
          error={formState.errors.passwordInfo?.password?.message}
        />

        <Input
          placeholder="Confirme sua senha*"
          {...register('passwordInfo.confirmPassword')}
          error={formState.errors.passwordInfo?.confirmPassword?.message}
        />
      </div>

      <div className="mt-8 flex w-full items-center justify-end gap-3">
        <StepperPreviousButton type="button" className="flex-1/2">
          Anterior
        </StepperPreviousButton>
        <StepperNextButton
          type="button"
          onClick={handleNextStep}
          className="flex-1/2"
        >
          Próximo
        </StepperNextButton>
      </div>
    </div>
  );
}
