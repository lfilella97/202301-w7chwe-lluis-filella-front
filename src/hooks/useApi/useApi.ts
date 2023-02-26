import { useCallback } from "react";
import { logInUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { User, UserCredentials } from "../../types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const loginUser = useCallback(
    async (userCredentials: UserCredentials) => {
      const path = "user/login";
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL_API!}${path}`,
          {
            method: "POST",
            body: JSON.stringify(userCredentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user: User = await response.json();

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const { token } = user;

        localStorage.setItem("token", token);

        dispatch(logInUserActionCreator(user));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  return { loginUser };
};

export default useApi;
