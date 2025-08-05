import { Button } from '@views/components/ui/Button';
import { Input } from '@views/components/ui/Input';

export function App() {
  return (
    <div className="content bg-card w-full max-w-[500px] flex-col items-center justify-center border shadow">
      <Input placeholder="Write your name" />
      <Button type="button">Submit</Button>
    </div>
  );
}
