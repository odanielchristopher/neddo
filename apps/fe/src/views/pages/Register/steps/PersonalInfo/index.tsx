import { useStepper } from '@app/hooks/useStepper';
import { Controller, useFormContext } from 'react-hook-form';

import { StepperNextButton } from '@views/components/app/Stepper';
import { Input } from '@views/components/ui/Input';
import { InputAvatar } from '@views/components/ui/InputAvatar';

import type { RegisterFormData } from '../..';

export function PersonalInfo() {
  const { register, formState, ...form } = useFormContext<RegisterFormData>();

  const { nextStep } = useStepper();

  async function handleNextStep() {
    const isValid = await form.trigger('personalInfo', {
      shouldFocus: true,
    });

    if (isValid) {
      nextStep();
    }
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex w-full flex-col items-center">
        <Controller
          control={form.control}
          name="personalInfo.imagePath"
          render={({ field: { onChange, value } }) => (
            <InputAvatar value={value} onChange={onChange} />
          )}
        />

        <div className="mt-8 w-full space-y-3">
          <Input
            placeholder="Nome do usuário*"
            {...register('personalInfo.name')}
            error={formState.errors.personalInfo?.name?.message}
          />
          <Input
            placeholder="E-mail*"
            {...register('personalInfo.email')}
            error={formState.errors.personalInfo?.email?.message}
          />
          <Input
            placeholder="Confirme seu email*"
            {...register('personalInfo.confirmEmail')}
            error={formState.errors.personalInfo?.confirmEmail?.message}
          />
        </div>
      </div>

      <div className="mt-8 flex w-full items-center justify-end">
        <StepperNextButton
          type="button"
          className="basis-1/2"
          onClick={handleNextStep}
        >
          Próximo
        </StepperNextButton>
      </div>
    </div>
  );
}
