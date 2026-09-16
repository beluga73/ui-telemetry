import { hello } from '@repo/ui-telemetry';
import { Button } from '@/components/ui/button';
import { useTheme } from './components/theme-provider';

export default function App() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      {hello}
      <Button onClick={handleClick}>{theme}</Button>
    </div>
  );
}
