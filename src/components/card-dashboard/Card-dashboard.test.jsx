import React from 'react';
import { render, screen } from '@testing-library/react';
import CardDashboard from './Card-dashboard'; // Asegúrate de que la ruta sea correcta

test('renders CardDashboard component with destination data', async () => {
  // Supongamos que tienes una función mock para obtener datos de destino
  // Puedes usar Jest para crear un mock de esta función y simular su comportamiento
  const mockDestinationData = [
    { title: 'Destino 1', location: 'Ubicación 1', image: 'imagen1.jpg' },
    { title: 'Destino 2', location: 'Ubicación 2', image: 'imagen2.jpg' },
    // Agrega más datos de destino según sea necesario
  ];

  // Crea un mock de tu servicio de tarjetas
  const mockCardDestinationService = {
    getAll: jest.fn().mockResolvedValue({ data: mockDestinationData }),
  };

  // Renderiza el componente con el servicio de tarjetas mock
  render(<CardDashboard cardDestinationService={mockCardDestinationService} />);

  // Espera a que se carguen los datos y se renderice el componente
  // Esto es importante ya que la carga de datos se realiza de manera asíncrona
  await screen.findByText('Título:Destino 1'); // Ajusta según la estructura de tus tarjetas
  await screen.findByText('Título:Destino 2');

  // Realiza afirmaciones para verificar que los datos se muestran correctamente
  expect(screen.getByText('Título:Destino 1')).toBeInTheDocument();
  expect(screen.getByText('Lugar:Ubicación 1')).toBeInTheDocument();
  expect(screen.getByText('Título:Destino 2')).toBeInTheDocument();
  expect(screen.getByText('Lugar:Ubicación 2')).toBeInTheDocument();

  // Verifica que se llama a la función getAll del servicio de tarjetas
  expect(mockCardDestinationService.getAll).toHaveBeenCalledTimes(1);
});
