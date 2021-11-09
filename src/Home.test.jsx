import React from 'react'
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('displays Home text', async () => {
    expect(await screen.findByText('Home!')).toBeVisible();
  });
});