import { useState } from "react";
import useApi from "./../../hooks/useApi/useApi";
import { UserCredentials } from "../../types";
import LogInStyles from "./LogInStyles";

export let sendForm: (event: React.FormEvent<HTMLInputElement>) => void;

const LogIn = (): JSX.Element => {
  const { loginUser } = useApi();

  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    password: "",
  } as UserCredentials);
  let { password, userName } = userCredentials;

  const handleUsername = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    userName = (event.target as HTMLInputElement).value;

    setUserCredentials({ password, userName });
  };
  const handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    password = (event.target as HTMLInputElement).value;

    setUserCredentials({ password, userName });
  };

  sendForm = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    loginUser(userCredentials);
  };

  return (
    <LogInStyles onSubmit={sendForm}>
      <h2 className="logIn-form_header">Login to your account</h2>

      <form className="logIn-form_form">
        <label className="logIn-form_username">
          Enter your user name:
          <input
            className="logIn-form_input"
            onChange={handleUsername}
            onSubmit={sendForm}
            type="text"
            placeholder="username"
            title="username"
          />
        </label>

        <label className="logIn-form_password">
          Enter your password:
          <input
            className="logIn-form_input"
            onChange={handlePassword}
            type="password"
            title="password"
            placeholder="password"
          />
        </label>

        <button className="logIn-form_button">Login</button>
      </form>

      <a className="logIn-form_register" href="/register">
        Register
      </a>
    </LogInStyles>
  );
};

export default LogIn;
