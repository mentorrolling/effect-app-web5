import React from "react";
import { useForm } from "react-hook-form";
import { postProduct } from "../helpers/apiFake";

const FormAddProductApp = () => {
  const { register, handleSubmit, reset, setFocus } = useForm();

  const agregarProducto = (datos) => {
    postProduct(datos).then((respuesta) => {
      console.log(respuesta);
      reset();
      setFocus("title");
    });
  };
  return (
    <div className="row">
      <div className="col">
        <form onSubmit={handleSubmit(agregarProducto)}>
          <div className="mb-4">
            <label className="form-label fw-bold">Nombre del Producto</label>
            <input
              type="text"
              className="form-control form-control-lg"
              {...register("title", { required: true })}
              placeholder="Ej: Smartphone X200"
            />
            <div className="invalid-feedback">
              Por favor ingresa el nombre del producto
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="form-label fw-bold">Precio</label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  {...register("price", { required: true })}
                  step="0.01"
                  min="0"
                  placeholder="Ej: 299.99"
                />
                <div className="invalid-feedback">Ingresa un precio válido</div>
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-bold">Categoría</label>
              <select
                className="form-select"
                {...register("category", { required: true })}
              >
                <option>Electrónica</option>
                <option>Hogar</option>
                <option>Ropa</option>
                <option>Deportes</option>
                <option>Otros</option>
              </select>
              <div className="invalid-feedback">Selecciona una categoría</div>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Descripción</label>
            <textarea
              className="form-control"
              {...register("description", { required: true })}
              rows="4"
              placeholder="Describe detalladamente el producto..."
            ></textarea>
            <div className="invalid-feedback">
              Escribe una descripción del producto
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">URL de la Imagen</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-image"></i>
              </span>
              <input
                type="url"
                className="form-control"
                {...register("image", { required: true })}
                placeholder="https://ejemplo.com/imagen.jpg"
                pattern="https://.*"
              />
              <div className="invalid-feedback">
                Ingresa una URL válida (debe comenzar con https://)
              </div>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-lg custom-btn">
              <i className="bi bi-save me-2"></i>Guardar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddProductApp;
