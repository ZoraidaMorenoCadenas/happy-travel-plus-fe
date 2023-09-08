import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DestinationForm from './Destination';

test('renders DestinationForm component with form elements', () => {
  render(<DestinationForm />);

  // Comprueba que el título, la ubicación, la imagen y la descripción estén en el formulario
  expect(screen.getByLabelText('Título')).toBeInTheDocument();
  expect(screen.getByLabelText('Ubicación')).toBeInTheDocument();
  expect(screen.getByLabelText('Imagen')).toBeInTheDocument();
  expect(screen.getByLabelText('¿Por qué quieres viajar allí?')).toBeInTheDocument();

  // Comprueba que los campos de entrada y el botón de enviar estén en el formulario
  expect(screen.getByRole('textbox', { name: /Título/i })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /Ubicación/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Aceptar/i })).toBeInTheDocument();

  // Comprueba que el campo de imagen sea un campo de archivo
  const imageInput = screen.getByLabelText('Imagen');
  expect(imageInput).toBeInTheDocument();
  expect(imageInput).toHaveAttribute('type', 'file');
});

test('handles form input changes', () => {
  render(<DestinationForm />);

  // Simula cambios en los campos de entrada
  fireEvent.change(screen.getByLabelText('Título'), { target: { value: 'New Title' } });
  fireEvent.change(screen.getByLabelText('Ubicación'), { target: { value: 'New Location' } });
  fireEvent.change(screen.getByLabelText('¿Por qué quieres viajar allí?'), { target: { value: 'New Description' } });

  // Comprueba que los cambios se reflejen en los campos de entrada
  expect(screen.getByLabelText('Título')).toHaveValue('New Title');
  expect(screen.getByLabelText('Ubicación')).toHaveValue('New Location');
  expect(screen.getByLabelText('¿Por qué quieres viajar allí?')).toHaveValue('New Description');
});

// Agregar más pruebas según sea necesario, como para la validación del formulario y el envío.
