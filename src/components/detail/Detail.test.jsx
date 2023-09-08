import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Detail from './Detail';

// Mock de Axios para simular solicitudes HTTP
jest.mock('axios');

test('renders Detail component with destination information', async () => {
  // Datos de ejemplo para simular una respuesta de la API
  const destinationData = {
    id: 1,
    title: 'Example Destination',
    location: 'Example Location',
    description: 'Example Description',
    image: 'example-image.jpg',
  };

  // Configurar el mock de Axios para devolver los datos de destino simulados
  axios.get.mockResolvedValue({ data: destinationData });

  // Ruta simulada con un parámetro de ID
  const route = '/destination/1';

  // Renderiza el componente dentro de MemoryRouter y Route para simular la navegación
  render(
    <MemoryRouter initialEntries={[route]}>
      <Route path="/destination/:id">
        <Detail />
      </Route>
    </MemoryRouter>
  );

  // Espera a que se carguen los datos de destino y se muestren en el componente
  await waitFor(() => {
    expect(screen.getByText('Example Destination')).toBeInTheDocument();
    expect(screen.getByText('Example Location')).toBeInTheDocument();
    expect(screen.getByText('Example Description')).toBeInTheDocument();
    expect(screen.getByAltText('Example Destination')).toBeInTheDocument();
  });
});

// Agrega más pruebas según sea necesario para otros casos, como manejo de errores, botones, etc.
