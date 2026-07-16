import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cohort details heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/cohorts details/i);
  expect(headingElement).toBeInTheDocument();
});
