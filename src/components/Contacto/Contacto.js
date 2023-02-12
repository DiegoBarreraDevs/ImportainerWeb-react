import React, { useState } from "react";

const Contacto = (props) => {
  const initialStateValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(values);
    setValues({ ...initialStateValues });
  };

  return (
    <div>
      <div className="izq">
        <div className="container izq">
          <div className="formulario">
            <form
              action="#"
              target=""
              method="get"
              name="formDatosPersonales"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                value={values.name}
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Telefono"
                value={values.phone}
                onChange={handleInputChange}
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleInputChange}
                required
              />

              <textarea
                name="message"
                htmlFor="message"
                placeholder="Dejanos tu mensaje!"
                maxLength="300"
                value={values.message}
                onChange={handleInputChange}
              ></textarea>

              <input type="submit" name="enviar" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
      {/* <div className="der">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                className="item"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.nombre}
              </li>
            ))}
          </ul>
        </div> */}
    </div>
  );
};

export default Contacto;
