import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('switches between light and dark mode', () => {
  render(<App />);

  const toggleButton = screen.getByRole('button', { name: /switch to dark mode/i });
  expect(toggleButton).toBeInTheDocument();

  fireEvent.click(toggleButton);

  expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument();
  expect(screen.getByTestId('theme-wrapper')).toHaveClass('dark');
});
