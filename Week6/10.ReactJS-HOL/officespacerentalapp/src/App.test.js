import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the office rental heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/office space rental application/i);
  expect(headingElement).toBeInTheDocument();
});
