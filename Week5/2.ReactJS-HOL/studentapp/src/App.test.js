import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the student management portal content', () => {
  render(<App />);

  expect(screen.getByText(/Welcome to the Home page of Student Management Portal/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome to the About page of Student Management Portal/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome to the Contact page of Student Management Portal/i)).toBeInTheDocument();
});
