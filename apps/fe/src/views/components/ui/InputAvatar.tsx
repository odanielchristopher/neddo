import { CircleXIcon, PencilIcon, SquareChartGanttIcon } from 'lucide-react';
import Dropzone from 'react-dropzone';

import { cn } from '@app/lib/utils';
import { megabytes } from '@app/utils/megabytes';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@views/components/ui/Avatar';

import { Spinner } from './Spinner';

interface IInputAvatarProps {
  value?: string | File;
  onChange?(value: File | undefined): void;
  className?: string;
  isLoading?: boolean;
}

export function InputAvatar({
  value,
  className,
  isLoading,
  onChange,
}: IInputAvatarProps) {
  const imageUrlPreview =
    value && typeof value !== 'string' ? URL.createObjectURL(value) : value;

  function handleValue(file: File) {
    onChange?.(file);
  }

  function handleRemoveImage() {
    onChange?.(undefined);
  }

  return (
    <div className={cn('dark:border-accent size-30 relative', className)}>
      <Dropzone
        accept={{
          'image/jpeg': [],
          'image/png': [],
        }}
        onDropAccepted={([file]) => handleValue(file)}
        maxFiles={1}
        maxSize={megabytes(1)}
        noClick
      >
        {({ getRootProps, getInputProps, open, isDragActive }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />

            <Avatar className="h-30 w-full">
              <AvatarImage
                src={imageUrlPreview}
                alt="Imagem do produto"
                className="object-cover"
              />
              <AvatarFallback
                className={cn(
                  'bg-primary transition-colors',
                  isDragActive && 'bg-violet-400',
                )}
              >
                {!isLoading && <SquareChartGanttIcon className="size-7" />}

                {isLoading && <Spinner />}
              </AvatarFallback>
            </Avatar>

            {!imageUrlPreview && (
              <button
                type="button"
                className="bg-accent hover:bg-accent/90 z-99 absolute right-0 top-0 flex size-10 cursor-pointer items-center justify-center rounded-full p-0.5"
                onClick={open}
              >
                <PencilIcon className="size-4" />
              </button>
            )}

            {imageUrlPreview && (
              <button
                type="button"
                className="z-99 absolute right-0 top-0 flex size-10 cursor-pointer items-center justify-center rounded-full"
                onClick={handleRemoveImage}
              >
                <CircleXIcon className="size-6" />
              </button>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
}
