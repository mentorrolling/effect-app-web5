import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { usuariosRegistrados } from "../data/datos";

const LoginScreen = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  console.log(usuariosRegistrados);

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const logIn = (datos) => {
    const usuario = usuariosRegistrados.find(
      (user) => user.email === datos.correo && user.password === datos.password
    );

    if (usuario) {
      const { username, email, rol } = usuario;
      localStorage.setItem("user", JSON.stringify({ username, email, rol }));
      navigate("/");
    } else {
      MySwal.fire({
        title: "OOPS!",
        text: "Correo o contraseña incorrectos",
        icon: "error",
      });
    }
    // console.log(usuario);
    // reset();
    // setFocus("correo");
    // navigate("/");
  };

  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-md-8 col-lg-6">
          <div className="login-container p-5">
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3">Bienvenido de nuevo</h2>
              <p className="text-muted">Inicia sesión para continuar</p>
            </div>

            <form onSubmit={handleSubmit(logIn)}>
              <div className="mb-4 position-relative">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control form-control-lg ps-4"
                  {...register("correo", {
                    required: true,
                  })}
                  placeholder="nombre@ejemplo.com"
                />
                {errors.correo && (
                  <p role="alert" className="text-danger">
                    El campo es obligatorio
                  </p>
                )}
                <i className="bi bi-envelope-fill input-icon"></i>
              </div>

              <div className="mb-4 position-relative">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control form-control-lg ps-4"
                  {...register("password", { required: true })}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p role="alert" className="text-danger">
                    El campo es obligatorio
                  </p>
                )}
                <i className="bi bi-lock-fill input-icon"></i>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <a href="#" className="text-decoration-none text-purple">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-custom btn-lg w-100 mb-3"
              >
                Iniciar sesión
              </button>

              <div className="text-center mt-4">
                <span className="text-muted">¿No tienes cuenta? </span>
                <a
                  href="#"
                  className="text-decoration-none text-purple fw-bold"
                >
                  Regístrate
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
