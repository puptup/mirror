import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Header test', () => {
  it('Header renders correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
