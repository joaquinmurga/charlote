import React, { useState } from 'react';

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // Estado para controlar el mensaje de éxito

  // Función de login
  const handleLogin = async (event) => {
    event.preventDefault(); // Evita el envío automático del formulario

    setError(""); // Reinicia el mensaje de error
    setSuccess(false); // Reinicia el mensaje de éxito

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, password })
      });

      if (!response.ok) {
        throw new Error('Email o contraseña incorrecta');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      
      setSuccess(true); // Muestra el mensaje de éxito
      // Aquí puedes redirigir al usuario o actualizar el estado de la aplicación
      // window.location.href = '/ruta-a-la-pagina'; // <-- Descomenta y modifica esta línea para la redirección futura
    } catch (error) {
      setError(error.message); // Actualiza el estado del error
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4" style={{ width: '20rem' }}>
        <h2 className="card-title text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID o Email</label>
            <input
              type="text"
              className="form-control"
              id="id"
              placeholder="Ingresa tu ID o Email"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">Ingreso exitoso</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
