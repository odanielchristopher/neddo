import { CircleXIcon, PencilIcon, SquareChartGanttIcon } from 'lucide-react';
import { useState } from 'react';
import Dropzone from 'react-dropzone';

import { cn } from '@app/lib/utils';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@views/components/ui/Avatar';

interface IInputAvatarProps {
  value?: string | File;
  onChange?(value: File | undefined): void;
  className?: string;
}

export function InputAvatar({ value, onChange, className }: IInputAvatarProps) {
  const [imageUrlPreview, setImageUrlPreview] = useState(() => {
    if (value && typeof value !== 'string') {
      return URL.createObjectURL(value);
    }

    return value;
  });

  function handleValue(file: File) {
    setImageUrlPreview(URL.createObjectURL(file));
    onChange?.(file);
  }

  function handleRemoveImage() {
    setImageUrlPreview(undefined);
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
        noClick
      >
        {({ getRootProps, getInputProps, open }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />

            <Avatar className="h-30 w-full">
              <AvatarImage
                src={imageUrlPreview}
                alt="Imagem do produto"
                className="object-cover"
              />
              <AvatarFallback className="bg-primary">
                <SquareChartGanttIcon className="size-7" />
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
