import React from 'react'
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact page', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test('displays Contact text', async () => {
    expect(await screen.findByText('Contact!')).toBeVisible();
  });
});