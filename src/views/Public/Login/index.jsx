import axios from "axios";
import { Login } from "components";
import React, { useState } from "react";
import { setToken, initAxiosIntterceptos } from "helpers";
import { Header, Text } from "./styled";
initAxiosIntterceptos();
const url = process.env.REACT_APP_URL_BACK;
const Component = () => {
  const [showAlert, setShowAlert] = useState({ status: false, message: "" });
  const onSubmit = async (data, e) => {
    const res = await axios.post(`${url}/autenticacion/login`, data);
    console.log(url);
    if (res.data.status === 400) {
      console.log(res.status, res.data.mensaje);
      return setShowAlert({ status: true, message: res.data.mensaje });
    }
    setToken(res.data.token);
    setTimeout(() => {
      e.target.reset();
      return (window.location.href = "/");
    }, 1000);
  };

  return (
    <>
      <Header>Inicio de sesión</Header>
      <Login
        onSubmit={onSubmit}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      <Text>
        ¿No tienes cuenta? <a href="/signup">Registrate aquí</a>
      </Text>
    </>
  );
};

export default Component;
export { Component as LoginPage };
