import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders blog post links and they navigate', async () => {
  render(<App />);

  const blogLink = await screen.findByRole('link', { name: /blog/i });

  userEvent.click(blogLink);

  const postLink = await screen.findByRole('link', { name: /nemo/i });
  
  expect(postLink).toBeInTheDocument();

  userEvent.click(postLink);

  const header = await screen.findByRole('heading', { name: /nemo/i });

  expect(header).toBeVisible();
});
