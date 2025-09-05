import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';

import { uploadsService } from '@app/services/uploadsService';

import { InputAvatar } from '../ui/InputAvatar';

interface IAvatarUploaderProps {
  value?: string;
  className?: string;
  onChange?(value: string | undefined): void;
}

export function AvatarUploader({
  value,
  className,
  onChange,
}: IAvatarUploaderProps) {
  const [imagePath, setImagePath] = useState(value);

  const { mutateAsync: uploadFile, isPending: isLoading } = useMutation({
    mutationFn: uploadsService.uploadFile,
  });

  async function handleFile(newValue: File | undefined) {
    if (!newValue) {
      setImagePath(undefined);

      return;
    }

    try {
      const url = await uploadFile({ file: newValue });

      setImagePath(url);
      onChange?.(url);
    } catch {
      setImagePath(undefined);
      onChange?.(undefined);

      toast.error('Erro ao salvar sua imagem!');
    }
  }

  return (
    <InputAvatar
      value={imagePath}
      className={className}
      isLoading={isLoading}
      onChange={handleFile}
    />
  );
}
