import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import GlobalStyles from "../../styles/GlobalStyles";
import LogIn from "./LogIn";

describe("Given a Login component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title `Login to your account`", () => {
      const heading = "Login to your account";

      render(
        <>
          <Provider store={store}>
            <GlobalStyles />
            <LogIn />
          </Provider>
        </>
      );

      const expectedText = screen.getByRole("heading");

      expect(expectedText).toHaveTextContent(heading);
    });

    test("Then it should show a button with the text 'Login'", () => {
      const button = "Login";

      render(
        <>
          <Provider store={store}>
            <GlobalStyles />
            <LogIn />
          </Provider>
        </>
      );

      const expectedText = screen.getByRole("button");

      expect(expectedText).toHaveTextContent(button);
    });

    test("Then it should show a link with the text 'Register'", () => {
      const link = "Register";

      render(
        <>
          <Provider store={store}>
            <GlobalStyles />
            <LogIn />
          </Provider>
        </>
      );

      const expectedText = screen.getByRole("link");

      expect(expectedText).toHaveTextContent(link);
    });
  });
});
