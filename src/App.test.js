import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nav links', () => {
  render(<App />);
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(5);
});
