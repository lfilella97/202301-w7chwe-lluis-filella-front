import { render, screen } from "@testing-library/react";
import GlobalStyles from "../../styles/GlobalStyles";
import LogIn from "./LogIn";

describe("Given a Login component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title `LogIn to your account`", () => {
      const heading = "LogIn to your account";

      render(
        <>
          <GlobalStyles />
          <LogIn />
        </>
      );

      const expectedText = screen.getByRole("heading");

      expect(expectedText).toHaveTextContent(heading);
    });

    test("Then it should show a button with the text 'LogIn'", () => {
      const button = "LogIn";

      render(
        <>
          <GlobalStyles />
          <LogIn />
        </>
      );

      const expectedText = screen.getByRole("button");

      expect(expectedText).toHaveTextContent(button);
    });

    test("Then it should show a link with the text 'Register'", () => {
      const link = "Register";

      render(
        <>
          <GlobalStyles />
          <LogIn />
        </>
      );

      const expectedText = screen.getByRole("link");

      expect(expectedText).toHaveTextContent(link);
    });
  });
});
