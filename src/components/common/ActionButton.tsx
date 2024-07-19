import { Button } from 'src/components/ui/button';

interface ActionButtonProps {
    label: string;
    onClick: () => void;
  }

export default function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <Button data-testid="action-btn" onClick={onClick} variant={`${label}` === '삭제' ? 'default' : 'outline'}>
      {label}
    </Button>
  );
}
