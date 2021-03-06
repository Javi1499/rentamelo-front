import React, { useState, Fragment } from 'react'
import axios from 'axios';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { setToken, initAxiosIntterceptos } from '../helpers';
initAxiosIntterceptos();
const url = "http://localhost:3000"
const urlServidor = "http://localhost:4006"
const Login1 = () => {
    // const [estaRegistrado, setEstaRegistrado] = useState(true);
    const [error, setError] = useState({ error: false, mensaje: "" });
    const [datosLogin, setDatosLogin] = useState({
        email: "",
        password: ""
    });



    //Se actualiz el state con los datos ingresados 
    const actualizarState = e => {
        setDatosLogin({
            ...datosLogin,
            [e.target.name]: e.target.value
        })
    }

    const { email, password } = datosLogin;

    //Function para iniciar sesion
    const functionIniciarSesion = async (e, props) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === "") {
            setError({ error: true, mensaje: "Todos los campos son obligatorios" });
            return
        } else {
            const respuesta = await axios.post(`${urlServidor}/autenticacion/login`, datosLogin);
            if (respuesta.data.status === 200) {
                setToken(respuesta.data.token);
                window.location.href = `${url}/`
                // if (respuesta.data.data.rol === "admin") {
                //     localStorage.setItem('admin', true);
                //     setError({ error: false })
                // }
            } else {
                setError({ error: true, mensaje: respuesta.data.mensaje })
            }

        }
    }
    return (
        <Fragment >
            <Container>
                <Row className="justify-content-center">
                    <Col className=" col-6">
                        <h2>INICIA SESIÓN</h2>
                        {error.error ? <p className="alerta-error">{error.mensaje}</p> : null}

                        <Form
                            onSubmit={functionIniciarSesion}
                        >
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="canela@correo.com"
                                name="email"
                                onChange={actualizarState}
                                value={email}
                            />
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="********"
                                name="password"
                                onChange={actualizarState}
                                value={password}
                            />
                            <Button className="mt-2"
                                type="submit">
                                Iniciar SESIÓN
                            </Button>
                            <Col>No tienes cuenta? <a href={`${url}/signup`}>Registrate</a></Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Login1;