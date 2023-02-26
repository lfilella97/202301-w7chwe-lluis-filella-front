import { logInUserActionCreator, userReducer } from "./userSlice";

describe("Given the user reducer", () => {
  describe("When it receives a log in action an a user lluis", () => {
    test("Then it should log in lluis", () => {
      const lluisUser = {
        userName: "Lluis",
        avatar: "verano2023.png",
        enemies: [],
        friends: [],
        token: "$2$10$vkgr.e6j6ds65SEG.wj2seahtaw4345mk",
        isLogged: false,
      };

      const logInLluisAction = logInUserActionCreator(lluisUser);
      const loggedLluis = userReducer(lluisUser, logInLluisAction);

      expect(loggedLluis).toHaveProperty("isLogged", true);
    });
  });
});
