import styled from "styled-components";

const LogInStyles = styled.div`
  width: 400px;
  min-height: 500px;
  border: 1px solid black;
  border-radius: 25px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: aliceblue;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);

  .logIn-form {
    &_header {
      font-size: 2.5rem;
      line-height: 1.4;
    }

    &_form {
      min-height: 300px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    &_username,
    &_password {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 80px;
    }
    &_input {
      padding: 5px;
      background-color: whitesmoke;
      border-radius: 10px;
    }
    &_button {
      background-color: #f2efaa;
      border-radius: 1.5rem;
      color: #0d172a;
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1;
      padding: 1rem 1.6rem;
      text-align: center;
      box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.25);

      &:hover,
      &:focus {
        background-color: #1e293b;
        color: #fff;
        cursor: pointer;
      }
    }

    &_register {
      text-align: center;
      display: inline-block;
      padding: 20px;
      border-radius: 1.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1;
      padding: 1rem 1.6rem;

      &:hover {
        box-shadow: 0px 0px 3px rgba(1, 1, 1, 1);
        cursor: pointer;
      }
    }
  }
`;

export default LogInStyles;
