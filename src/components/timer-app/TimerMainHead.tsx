import {
  Badge,
  CircleDollarSign,
  CircleDollarSignIcon,
  CoinsIcon,
  SettingsIcon,
} from 'lucide-react';
import { Button } from '../ui/button';

export const TimerMainHead = () => {
  return (
    <div className="flex flex-col items-center gap-2 shrink-0 pt-4">
      <div className="text-sm font-semibold">Home</div>
      <div className="flex items-center justify-between w-full px-4">
        <Button
          type="button"
          variant={'outline'}
          className="text-sm gap-2 px-2"
        >
          <CircleDollarSignIcon className="w-4 h-4" />
          100
        </Button>
        <Button type="button" variant={'ghost'} className="w-10 h-10 p-0">
          <SettingsIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
