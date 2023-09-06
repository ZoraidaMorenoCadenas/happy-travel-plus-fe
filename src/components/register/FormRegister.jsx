import React, { useState } from 'react';
import { CardService } from '../../services/Cards-Service';
import './FormRegister.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CardService(formData);
      console.log('Registro exitoso:', response);
      //  realizar acciones adicionales después del registro exitoso, como redireccionar al usuario.
    } catch (error) {
      console.error('Error en el registro:', error);
      //  manejar errores, mostrar mensajes de error, etc.
    }
  };

  return (
    <div className="custom-container">
      <div className="custom-card">
        <div className="custom-form-header">Registro de usuario</div>
        <div className="red-line"></div>

        <div className="custom-form-body">
          <form onSubmit={handleSubmit}>
            <div className="custom-form">
              <label htmlFor="name" className="custom-form-label">
                Nombre
              </label>
              <div className="input-container">
                <input
                  id="name"
                  type="text"
                  className="custom-form-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Escribe tu nombre..."
                />
              </div>
            </div>

            <div className="custom-form">
              <label htmlFor="email" className="custom-form-label">
                E-Mail
              </label>
              <div className="input-container">
                <input
                  id="email"
                  type="email"
                  className="custom-form-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="Escribe tu email..."
                />
              </div>
            </div>

            <div className="custom-form">
              <label htmlFor="password" className="custom-form-label">
                Password
              </label>
              <div className="input-container">
                <input
                  id="password"
                  type="password"
                  className="custom-form-input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  placeholder="Escribe tu contraseña..."
                />
              </div>
            </div>

            <div className="custom-form">
              <label htmlFor="password-confirm" className="custom-form-label">
                Confirm Password
              </label>
              <div className="input-container">
                <input
                  id="password-confirm"
                  type="password"
                  className="custom-form-input"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  placeholder="Confirma tu contraseña..."
                />
              </div>
            </div>

            <div className="custom-button-submit">
              <div>
                <button type="submit" className="submit-button">
                  Aceptar
                </button>
                <a className="cancel-button" href="/">
                  Cancelar
                </a>
              </div>

              <div className="login-link">
                <p>
                  ¿Ya tienes una cuenta? Accede <a href="/login">aquí</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
