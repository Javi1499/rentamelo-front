import React, { useState, useEffect } from "react";
import axios from "axios";
import { Profile } from "components";

const url = process.env.REACT_APP_URL_BACK;
const Component = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const getData = async () => {
    console.log("hola");
    const res = await axios.get(`${url}/usuarios/profile`);
    setData(res.data.data);
  };

  useEffect(() => {
    console.log("hola");
    getData();
  }, []);
  return <Profile userData={data} />;
};

export default Component;
export { Component as PageProfile };
