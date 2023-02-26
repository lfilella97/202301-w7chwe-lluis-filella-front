import LogInStyles from "./LogInStyles";

const LogIn = (): JSX.Element => {
  return (
    <LogInStyles>
      <h2 className="logIn-form_header">LogIn to your account</h2>
      <form className="logIn-form_form">
        <label className="logIn-form_username">
          Enter your user name:
          <input type="text" placeholder="username" title="username" />
        </label>

        <label className="logIn-form_password">
          Enter your password:
          <input type="password" title="password" placeholder="password" />
        </label>
        <button className="logIn-form_button" type="button">
          LogIn
        </button>
      </form>
      <a className="logIn-form_register" href="/register">
        Register
      </a>
    </LogInStyles>
  );
};

export default LogIn;
