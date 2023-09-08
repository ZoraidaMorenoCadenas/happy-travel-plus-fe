import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para usar las funciones de coincidencia de jest-dom
import Card from '../card/Card';

test('renders Card component with correct props', () => {
  const props = {
    id: 1,
    image: 'image-url',
    title: 'Example Title',
    location: 'Example Location',
  };

  render(<Card {...props} />);

  // Comprobamos que el componente se renderizó correctamente
  expect(screen.getByText('Example Title')).toBeInTheDocument();
  expect(screen.getByText('Example Location')).toBeInTheDocument();

  // Comprobamos que la imagen se renderizó correctamente
  const image = screen.getByAltText('fotografía recibida de la API');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'image-url');
});
