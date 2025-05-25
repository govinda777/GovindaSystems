import React from 'react';
import { render, screen } from '@testing-library/react';
import Dework from './Dework';

describe('Dework Component (iframe)', () => {
  test('renders the Dework iframe with correct src', () => {
    render(<Dework />);
    const iframe = screen.getByTitle('Dework Govinda Systems');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://app.dework.xyz/govinda-systems');
    expect(iframe).toHaveAttribute('allowfullscreen');
  });
}); 