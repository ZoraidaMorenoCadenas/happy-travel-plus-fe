import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

// Mock el componente CardDashboard, ya que solo estamos probando HomePage
jest.mock('../../components/card-dashboard/Card-dashboard', () => {
  return () => <div data-testid="mocked-card-dashboard" />;
});

describe('HomePage', () => {
  it('debe renderizar correctamente', () => {
    const { getByTestId } = render(<HomePage />);
    
    // Asegurarse de que el componente se renderice correctamente
    expect(getByTestId('mocked-card-dashboard')).toBeInTheDocument();
  });
});
