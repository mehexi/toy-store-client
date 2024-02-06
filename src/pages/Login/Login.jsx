import React, { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const Login = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return <div>
    <img src="" alt="" />
  </div>;
};

export default Login;
