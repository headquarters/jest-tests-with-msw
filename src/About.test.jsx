import React from 'react'
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About page', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('displays About text', async () => {
    expect(await screen.findByText('About!')).toBeVisible();
  });
});