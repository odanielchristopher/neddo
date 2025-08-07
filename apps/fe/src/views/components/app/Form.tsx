import { zodResolver } from '@hookform/resolvers/zod';
import { SearchIcon } from 'lucide-react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { sleep } from '@app/lib/utils';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const schema = z.object({
  name: z
    .string({ message: 'O nome é obrigatório' })
    .nonempty('O nome é obrigatório')
    .min(2, 'O nome deve ter pelo menos 2 caracteres'),
  age: z
    .number({ coerce: true, message: 'A idade deve ser um número' })
    .nonnegative('A idade não pode ser negativa')
    .min(18, 'Você precisa ter mais de 18 anos'),
  zipcode: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function Form() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState,
    clearErrors,
    reset,
    getValues,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      age: 18,
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const handleSubmit = hookFormHandleSubmit(
    async (formData) => {
      await sleep(2000);
      console.log(formData);

      reset({
        age: 18,
        name: '',
      });
    },
    (errors) => {
      console.log(errors);
    },
  );

  const handleSearchZipcode = useCallback(async () => {
    const zipcode = getValues('zipcode');

    if (zipcode && zipcode?.length >= 8) {
      const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`);

      const body: { logradouro: string; localidade: string } =
        await response.json();

      setValue('street', body.logradouro);
      setValue('city', body.localidade);
    }
  }, [setValue]);

  return (
    <div className="grid h-full w-full place-items-center">
      <form
        className="w-full max-w-[500px] rounded-2xl p-4"
        onSubmit={handleSubmit}
      >
        <div className="space-y-3">
          <Input
            placeholder="Nome"
            {...register('name')}
            error={formState.errors.name?.message as string}
          />

          <Input
            placeholder="Idade"
            {...register('age', {
              valueAsNumber: true,
            })}
            error={formState.errors.age?.message as string}
          />

          <div className="flex items-center gap-3">
            <Input
              placeholder="CEP"
              className="flex-1"
              {...register('zipcode', {
                onChange: () => handleSearchZipcode(),
              })}
              error={formState.errors.age?.message as string}
            />

            <Button type="button" variant="ghost" onClick={handleSearchZipcode}>
              <SearchIcon />
              Buscar
            </Button>
          </div>

          <Input
            placeholder="Cidade"
            className="flex-1"
            {...register('city')}
            error={formState.errors.age?.message as string}
          />

          <Input
            placeholder="Rua"
            className="flex-1"
            {...register('street')}
            error={formState.errors.age?.message as string}
          />
        </div>

        <div className="mt-6 flex w-full gap-4">
          <Button
            type="button"
            className="flex-1 text-base"
            disabled={
              !formState.isDirty || formState.isSubmitting || !formState.isValid
            }
            onClick={() => reset(getValues())}
          >
            Salvar
          </Button>

          <Button
            type="submit"
            className="flex-1 text-base"
            disabled={
              formState.isDirty || !formState.isValid || formState.isSubmitting
            }
          >
            Enviar
          </Button>
        </div>

        <div className="mt-4">
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => clearErrors()}
          >
            Limpar erros
          </Button>
        </div>
      </form>
    </div>
  );
}
