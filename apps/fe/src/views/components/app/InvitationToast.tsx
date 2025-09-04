import { Link } from 'react-router';
import { toast } from 'sonner';

import type { Invitation } from '@app/types';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';
import { Button } from '../ui/Button';

export interface IInvitationToastProps {
  toastId: string | number;
  invitation: Invitation;
}

export function InvitationToast({
  toastId,
  invitation,
}: IInvitationToastProps) {
  return (
    <div className="bg-card flex items-center gap-6 rounded-lg border px-2 py-3">
      <div className="flex flex-1 items-center gap-3">
        <Avatar className="size-12 rounded-full">
          <AvatarImage
            className="object-cover"
            src={invitation.organization.imagePath ?? undefined}
          />
          <AvatarFallback className="bg-primary">
            {invitation.organization.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-1 flex-col">
          <span className="font-medium">{invitation.organization.name}</span>

          <span className="text-muted-foreground text-sm">
            te convidou para entrar no time!
          </span>
        </div>
      </div>

      <Button
        type="button"
        size="sm"
        className="rounded-md"
        asChild
        onClick={() => toast.dismiss(toastId)}
      >
        <Link to={`invitation/${invitation.id}`}>Aceitar</Link>
      </Button>
    </div>
  );
}
